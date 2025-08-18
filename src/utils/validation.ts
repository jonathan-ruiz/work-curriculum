/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate URL format
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * Validate required field
 */
export function isRequired(value: any): boolean {
  return value !== null && value !== undefined && value !== ''
}

/**
 * Validate date format
 */
export function isValidDate(date: any): boolean {
  return date instanceof Date && !isNaN(date.getTime())
}

/**
 * Validate skill value range
 */
export function isValidSkillValue(value: number): boolean {
  return typeof value === 'number' && value >= 0 && value <= 100
}

/**
 * Sanitize HTML string
 */
export function sanitizeHtml(html: string): string {
  // Basic HTML sanitization - in production, use a library like DOMPurify
  return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
}

/**
 * Validate experience data structure
 */
export function validateExperience(experience: any): boolean {
  return (
    experience &&
    typeof experience.title === 'string' &&
    Array.isArray(experience.role) &&
    typeof experience.company === 'string' &&
    isValidDate(experience.startDate) &&
    Array.isArray(experience.skills) &&
    typeof experience.industry === 'string'
  )
}
