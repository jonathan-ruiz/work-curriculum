/**
 * Format a date to a readable string
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long'
  })
}

/**
 * Calculate the duration between two dates
 */
export function calculateDuration(startDate: Date, endDate?: Date): string {
  const end = endDate || new Date()
  const diffTime = Math.abs(end.getTime() - startDate.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  const years = Math.floor(diffDays / 365)
  const months = Math.floor((diffDays % 365) / 30)
  
  if (years > 0) {
    return months > 0 ? `${years}y ${months}m` : `${years}y`
  }
  return `${months}m`
}

/**
 * Check if a date is in the past
 */
export function isPastDate(date: Date): boolean {
  return date < new Date()
}

/**
 * Check if a date is in the future
 */
export function isFutureDate(date: Date): boolean {
  return date > new Date()
}

/**
 * Get the current year
 */
export function getCurrentYear(): number {
  return new Date().getFullYear()
}

/**
 * Format date range for display
 */
export function formatDateRange(startDate: Date, endDate?: Date): string {
  const start = formatDate(startDate)
  const end = endDate ? formatDate(endDate) : 'Present'
  return `${start} - ${end}`
}
