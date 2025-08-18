// Application constants
export const APP_NAME = 'Jonathan Ruiz Portfolio'
export const APP_VERSION = '1.0.0'
export const APP_DESCRIPTION = 'Professional portfolio and CV website'

// API constants
export const API_ENDPOINTS = {
  CHAT: '/api/chat',
  HEALTH: '/api/health'
} as const

export const API_CONFIG = {
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
  CACHE_DURATION: 5 * 60 * 1000 // 5 minutes
} as const

// UI constants
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536
} as const

export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500
} as const

// Industry icons mapping
export const INDUSTRY_ICONS = {
  aviation: 'plane',
  finance: 'banknotes',
  gaming: 'gamepad',
  technology: 'computer-desktop',
  healthcare: 'heart',
  education: 'academic-cap'
} as const

// Skill categories
export const SKILL_CATEGORIES = {
  LANGUAGES: 'Programming Languages',
  FRAMEWORKS: 'Frameworks & Libraries',
  TOOLS: 'Tools & Platforms',
  CLOUD: 'Cloud & Infrastructure',
  METHODOLOGIES: 'Methodologies & Practices'
} as const

// Theme colors
export const THEME_COLORS = {
  PRIMARY: '#3B82F6',
  SECONDARY: '#64748B',
  SUCCESS: '#10B981',
  WARNING: '#F59E0B',
  ERROR: '#EF4444',
  INFO: '#06B6D4'
} as const

// Local storage keys
export const STORAGE_KEYS = {
  SELECTED_SKILLS: 'portfolio-selected-skills',
  CHAT_HISTORY: 'portfolio-chat-history',
  THEME: 'portfolio-theme'
} as const

// Print configuration
export const PRINT_CONFIG = {
  MARGIN: '1cm',
  FONT_SIZE: '12px',
  LINE_HEIGHT: '1.4'
} as const
