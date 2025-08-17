const express = require('express');
const cors = require('cors');
const { RateLimiterMemory } = require('rate-limiter-flexible');
require('dotenv').config();

// Import work experience data
const { workExperiences } = require('./model.js');

// Function to format work experience for AI context
function formatWorkExperienceForAI() {
  return workExperiences.map(exp => {
    // Format duration
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
    
    // Format skills
    const skills = exp.skills?.map(skill => skill.label).join(', ') || 'None specified';
    
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

const app = express();
const PORT = process.env.PORT || 3001;

// Rate limiter configuration
const rateLimiter = new RateLimiterMemory({
  keyGenerator: (req) => req.ip, // Limit by IP address
  points: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 10, // Number of requests
  duration: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 60000, // Time window in milliseconds
});

// CORS configuration
const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:5173').split(',');
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: '1mb' }));

// Rate limiting middleware
const rateLimitMiddleware = async (req, res, next) => {
  try {
    await rateLimiter.consume(req.ip);
    next();
  } catch (rejRes) {
    const secs = Math.round(rejRes.msBeforeNext / 1000) || 1;
    res.set('Retry-After', String(secs));
    res.status(429).json({
      error: 'Too many requests',
      retryAfter: secs,
      remainingPoints: rejRes.remainingPoints
    });
  }
};

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// ChatGPT proxy endpoint
app.post('/api/chat', rateLimitMiddleware, async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ 
        error: 'Message is required and must be a string' 
      });
    }

    if (!process.env.OPENAI_API_KEY) {
      console.error('OpenAI API key not configured');
      return res.status(500).json({ 
        error: 'Server configuration error' 
      });
    }

    // Prepare the request to OpenAI
    const openAIRequest = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `You are an AI assistant for Jonathan Ruiz's CV. Only answer questions about his professional background, work experience, skills, education, and contact info. Redirect off-topic questions to his professional background.

Background: Computer Science degree, CKA certified, Software Engineer, contact@jonathanruiz.co.uk, Twitter:@jonathan_ruiz3, GitHub:jonathan-ruiz, LinkedIn:jonathanruizx, YouTube:@jonathanruiz3

WORK EXPERIENCE:
${formatWorkExperienceForAI()}

Keep responses concise and professional.`
        },
        {
          role: 'user',
          content: message
        }
      ],
      max_tokens: 300,
      temperature: 0.7
    };

    // Make request to OpenAI
    const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(openAIRequest)
    });

    if (!openAIResponse.ok) {
      const errorData = await openAIResponse.json().catch(() => ({}));
      console.error('OpenAI API error:', errorData);
      
      return res.status(openAIResponse.status).json({
        error: 'Failed to get response from AI service',
        details: errorData.error?.message || 'Unknown error'
      });
    }

    const data = await openAIResponse.json();
    
    // Extract the response content
    const aiResponse = data.choices?.[0]?.message?.content;
    
    if (!aiResponse) {
      return res.status(500).json({ 
        error: 'Invalid response from AI service' 
      });
    }

    // Log successful request (without sensitive data)
    console.log(`[${new Date().toISOString()}] Chat request from ${req.ip} - Success`);

    res.json({ 
      response: aiResponse,
      usage: data.usage
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ 
    error: 'Internal server error' 
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Endpoint not found' 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend proxy server running on port ${PORT}`);
  console.log(`📊 Rate limit: ${process.env.RATE_LIMIT_MAX_REQUESTS || 10} requests per minute`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔑 OpenAI API: ${process.env.OPENAI_API_KEY ? 'Configured' : 'Not configured'}`);
});

module.exports = app;
