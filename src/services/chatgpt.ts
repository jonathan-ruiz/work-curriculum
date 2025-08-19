import { API_ENDPOINTS, API_CONFIG } from '@/constants'

interface ChatRequest {
  message: string
}

class ChatGPTService {
  private responseCache = new Map<string, { response: string; timestamp: number }>()
  private lastRequestTime = 0

  /**
   * Send a message to the ChatGPT API
   */
  async sendMessage(message: string): Promise<string> {
    try {
      // Check cache first
      const cacheKey = this.generateCacheKey(message)
      const cachedResponse = this.getCachedResponse(cacheKey)
      if (cachedResponse) {
        return cachedResponse
      }

      // Rate limiting
      await this.enforceRateLimit()

      // Make API request
      const response = await this.makeApiRequest(message)

      // Cache the response
      this.cacheResponse(cacheKey, response)

      return response
    } catch (error) {
      console.error('Error in ChatGPT service:', error)
      throw new Error(this.getErrorMessage(error))
    }
  }

  /**
   * Check if the service is properly configured
   */
  isConfigured(): boolean {
    return true // Backend handles configuration
  }

  /**
   * Get configuration status message
   */
  getConfigurationStatus(): string {
    return 'Backend proxy configured'
  }

  /**
   * Generate cache key for a message
   */
  private generateCacheKey(message: string): string {
    return btoa(message.toLowerCase().trim())
  }

  /**
   * Get cached response if available and not expired
   */
  private getCachedResponse(cacheKey: string): string | null {
    const cached = this.responseCache.get(cacheKey)
    if (!cached) return null

    const isExpired = Date.now() - cached.timestamp > API_CONFIG.CACHE_DURATION
    if (isExpired) {
      this.responseCache.delete(cacheKey)
      return null
    }

    return cached.response
  }

  /**
   * Cache a response
   */
  private cacheResponse(cacheKey: string, response: string): void {
    this.responseCache.set(cacheKey, {
      response,
      timestamp: Date.now()
    })
  }

  /**
   * Enforce rate limiting between requests
   */
  private async enforceRateLimit(): Promise<void> {
    const now = Date.now()
    const timeSinceLastRequest = now - this.lastRequestTime
    
    if (timeSinceLastRequest < 1000) { // 1 second minimum between requests
      await new Promise(resolve => setTimeout(resolve, 1000 - timeSinceLastRequest))
    }
    
    this.lastRequestTime = Date.now()
  }

  /**
   * Make the actual API request
   */
  private async makeApiRequest(message: string): Promise<string> {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT)

    try {
      const response = await fetch(API_ENDPOINTS.CHAT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message } as ChatRequest),
        signal: controller.signal
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      
      if (data.error) {
        throw new Error(data.error)
      }

      return data.response || data.message
    } catch (error) {
      clearTimeout(timeoutId)
      throw error
    }
  }

  /**
   * Get user-friendly error message
   */
  private getErrorMessage(error: any): string {
    if (error.name === 'AbortError') {
      return 'Request timed out. Please try again.'
    }
    
    if (error.message.includes('Failed to fetch')) {
      return 'Network error. Please check your connection and try again.'
    }
    
    if (error.message.includes('HTTP 429')) {
      return 'Too many requests. Please wait a moment and try again.'
    }
    
    if (error.message.includes('HTTP 500')) {
      return 'Server error. Please try again later.'
    }
    
    return error.message || 'An unexpected error occurred. Please try again.'
  }

  /**
   * Clear the response cache
   */
  clearCache(): void {
    this.responseCache.clear()
  }

  /**
   * Get cache statistics
   */
  getCacheStats(): { size: number; entries: number } {
    return {
      size: this.responseCache.size,
      entries: this.responseCache.size
    }
  }
}

export const chatGPTService = new ChatGPTService()
