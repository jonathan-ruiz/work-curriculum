// Core portfolio types
export interface ExperienceType {
  id: string
  title: string
  role: string[]
  company: string
  project?: string
  finalClient?: string
  startDate: Date
  endDate?: Date
  achievements: string[]
  tasks: string[]
  skills: SkillType[]
  industry: string
  grouped?: boolean
  highlight?: boolean
  image?: string
  breakPageAfter?: boolean
}

export interface SkillType {
  label: string
  value: number
}

export interface PersonalInfo {
  name: string
  title: string
  email: string
  location: string
  summary: string
  skills: {
    primary: string[]
    technologies: string[]
    languages: string[]
  }
}

export interface Certification {
  name: string
  issuer: string
  date: string
  id: string
}

export interface Education {
  degree: string
  institution: string
  year: string
  location: string
}

// Component props types
export interface ChartProps {
  data: any
  options?: any
  width?: number
  height?: number
}

export interface ExperienceCardProps {
  experience: ExperienceType
  showDetails?: boolean
}

export interface SkillFilterProps {
  skills: SkillType[]
  selectedSkills: string[]
  onSkillToggle: (skill: string) => void
  onClearSkills: () => void
}

// API types
export interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export interface ChatResponse {
  response: string
  message?: string
  error?: string
  usage?: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
}

// Utility types
export type IndustryType = 
  | 'aviation' 
  | 'finance' 
  | 'gaming' 
  | 'technology' 
  | 'healthcare' 
  | 'education'
  | 'building'
  | 'health'
  | 'public infrastructure'
  | 'ecommerce'
  | 'telecommunications'
  | 'robotics'
  | 'learning'
  | 'aeronautics'

export type RoleType = 'Lead' | 'Developer' | 'DevOps' | 'SecOps' | 'Cloud' | 'AI' | 'Architect'

// Theme types
export interface ThemeConfig {
  primary: string
  secondary: string
  accent: string
  background: string
  text: string
}

// Print types
export interface PrintConfig {
  isPrintMode: boolean
  showCharts: boolean
  showSkills: boolean
  compactMode: boolean
}
