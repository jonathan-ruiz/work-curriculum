import { workExperiences } from '../model';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// Function to format work experience for AI context (matching web presentation)
function formatWorkExperienceForAI(): string {
  return workExperiences.map(exp => {
    // Format duration like the web: "Mar 2023 - Dec 2023 (9 Months)"
    const startDate = exp.startDate.toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
    const endDate = exp.endDate 
      ? exp.endDate.toLocaleDateString(undefined, { month: 'short', year: 'numeric' })
      : 'Present';
    
    // Calculate duration in months
    const endDateForCalc = exp.endDate || new Date();
    const monthsDiff = (endDateForCalc.getFullYear() - exp.startDate.getFullYear()) * 12 + 
                      (endDateForCalc.getMonth() - exp.startDate.getMonth());
    const years = Math.floor(monthsDiff / 12);
    const months = monthsDiff % 12;
    const durationText = years > 0 
      ? `${years} Year${years > 1 ? 's' : ''} ${months > 0 ? `${months} Month${months > 1 ? 's' : ''}` : ''}`
      : `${months} Month${months > 1 ? 's' : ''}`;
    
    const duration = `${startDate} - ${endDate} (${durationText})`;
    
    // Format project (remove HTML tags)
    const project = exp.project?.replace(/<[^>]*>/g, '') || '';
    
    // Format skills (only high-value skills like the web)
    const highValueSkills = exp.skills?.filter(skill => skill.value > 89).map(skill => skill.label) || [];
    const skills = highValueSkills.length > 0 ? highValueSkills.join(', ') : 'None specified';
    
    // Format tasks and achievements
    const tasks = exp.tasks?.join('\n  • ') || 'None specified';
    const achievements = exp.achievements?.length > 0 ? exp.achievements.join('\n  • ') : 'None specified';
    
    return `
${exp.title} at ${exp.company}
Duration: ${duration}
${project ? `Project: ${project}` : ''}
${exp.industry ? `Industry: ${exp.industry}` : ''}
${exp.role ? `Roles: ${exp.role.join(', ')}` : ''}
${exp.finalClient ? `Client: ${exp.finalClient}` : ''}

Skills: ${skills}

Tasks:
  • ${tasks}

${exp.achievements?.length > 0 ? `Achievements:\n  • ${achievements}\n` : ''}
---`;
  }).join('\n');
}

interface ChatGPTResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

// You'll need to set this environment variable with your OpenAI API key
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

// Context about Jonathan's experience that will be sent with every request (optimized for tokens)
const SYSTEM_CONTEXT = `You are an AI assistant for Jonathan Ruiz's CV. Only answer questions about his professional background, work experience, skills, education, and contact info. Redirect off-topic questions to his professional background.

Background: Computer Science degree, CKA certified, Software Engineer, contact@jonathanruiz.co.uk, Twitter:@jonathan_ruiz3, GitHub:jonathan-ruiz, LinkedIn:jonathanruizx, YouTube:@jonathanruiz3

WORK EXPERIENCE:
${formatWorkExperienceForAI()}

Keep responses concise and professional.`;

export class ChatGPTService {
  private static instance: ChatGPTService;
  private apiKey: string | undefined;
  private responseCache: Map<string, { response: string; timestamp: number }> = new Map();
  private lastRequestTime: number = 0;
  private readonly CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours
  private readonly RATE_LIMIT_DELAY = 2000; // 2 seconds between requests


  private constructor() {
    this.apiKey = OPENAI_API_KEY;
  }

  public static getInstance(): ChatGPTService {
    if (!ChatGPTService.instance) {
      ChatGPTService.instance = new ChatGPTService();
    }
    return ChatGPTService.instance;
  }

  public async sendMessage(userMessage: string): Promise<string> {
    if (!this.apiKey) {
      throw new Error('OpenAI API key not configured. Please set VITE_OPENAI_API_KEY environment variable.');
    }

    // Check cache first for cost savings
    const cacheKey = userMessage.toLowerCase().trim();
    const cached = this.responseCache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
      return cached.response;
    }

    // Rate limiting
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTime;
    if (timeSinceLastRequest < this.RATE_LIMIT_DELAY) {
      await new Promise(resolve => setTimeout(resolve, this.RATE_LIMIT_DELAY - timeSinceLastRequest));
    }
    this.lastRequestTime = Date.now();

    // Simple single-message approach (no conversation history)
    const messages: ChatMessage[] = [
      { role: 'system', content: SYSTEM_CONTEXT },
      { role: 'user', content: userMessage }
    ];

    try {
      const response = await fetch(OPENAI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: messages,
          max_tokens: 300, // Reduced from 500
          temperature: 0.7
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`API request failed: ${response.status} ${response.statusText} - ${errorData.error?.message || 'Unknown error'}`);
      }

      const data: ChatGPTResponse = await response.json();
      const aiResponse = data.choices[0]?.message?.content || 'No response received from AI.';
      
      // Cache the response for cost savings
      this.responseCache.set(cacheKey, { response: aiResponse, timestamp: Date.now() });
      
      return aiResponse;
    } catch (error) {
      console.error('ChatGPT API error:', error);
      throw error;
    }
  }

  public isConfigured(): boolean {
    return !!this.apiKey;
  }

  public getConfigurationStatus(): { configured: boolean; message: string } {
    if (!this.apiKey) {
      return {
        configured: false,
        message: 'OpenAI API key not configured. Set VITE_OPENAI_API_KEY environment variable to enable real AI responses.'
      };
    }
    return {
      configured: true,
      message: 'ChatGPT integration is ready!'
    };
  }

  public clearCache(): void {
    this.responseCache.clear();
  }

  public getCacheStats(): { size: number; hitRate: number } {
    return {
      size: this.responseCache.size,
      hitRate: 0 // Could implement hit rate tracking if needed
    };
  }


}

export default ChatGPTService.getInstance();
