import { workExperiences } from '../model';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatGPTResponse {
  response: string;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

// Backend proxy configuration
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || '';

export class ChatGPTService {
  private static instance: ChatGPTService;
  private responseCache: Map<string, { response: string; timestamp: number }> = new Map();
  private lastRequestTime: number = 0;
  private readonly CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours
  private readonly RATE_LIMIT_DELAY = 2000; // 2 seconds between requests

  private constructor() {}

  public static getInstance(): ChatGPTService {
    if (!ChatGPTService.instance) {
      ChatGPTService.instance = new ChatGPTService();
    }
    return ChatGPTService.instance;
  }

  public async sendMessage(userMessage: string): Promise<string> {
    try {
      // Check if we have a cached response
      const cacheKey = userMessage.toLowerCase().trim();
      const cached = this.responseCache.get(cacheKey);
      if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
        console.log('Using cached response');
        return cached.response;
      }

      // Rate limiting
      const now = Date.now();
      if (now - this.lastRequestTime < this.RATE_LIMIT_DELAY) {
        const delay = this.RATE_LIMIT_DELAY - (now - this.lastRequestTime);
        await new Promise(resolve => setTimeout(resolve, delay));
      }

      // Make request to backend proxy
      const response = await fetch(`/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        
        if (response.status === 429) {
          throw new Error(`Rate limit exceeded. Please wait ${errorData.retryAfter || 60} seconds before trying again.`);
        }
        
        throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
      }

      const data: ChatGPTResponse = await response.json();
      
      // Cache the response
      this.responseCache.set(cacheKey, {
        response: data.response,
        timestamp: Date.now()
      });

      this.lastRequestTime = Date.now();
      return data.response;

    } catch (error) {
      console.error('Error calling ChatGPT service:', error);
      throw error;
    }
  }

  public isConfigured(): boolean {
    return true; // Backend proxy handles configuration
  }

  public getConfigurationStatus(): string {
    return 'Backend proxy configured';
  }

  public clearCache(): void {
    this.responseCache.clear();
  }

  public getCacheSize(): number {
    return this.responseCache.size;
  }
}

export const chatGPTService = ChatGPTService.getInstance();
