import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { ExperienceType, SkillType } from '@/types'
import { workExperiences } from '@/data/portfolio'

export const usePortfolioStore = defineStore('portfolio', () => {
  // State
  const experiences = ref<ExperienceType[]>(workExperiences)
  const selectedSkills = ref<string[]>([])
  const isPrintMode = ref(false)

  // Getters
  const filteredExperiences = computed(() => {
    if (selectedSkills.value.length === 0) {
      return experiences.value
    }
    
    return experiences.value.filter(exp => 
      exp.skills?.some(skill => 
        selectedSkills.value.includes(skill.label)
      )
    )
  })

  const allSkills = computed(() => {
    const skillsMap = new Map<string, SkillType>()
    
    experiences.value.forEach(exp => {
      exp.skills?.forEach(skill => {
        if (!skillsMap.has(skill.label)) {
          skillsMap.set(skill.label, skill)
        } else {
          // Keep the highest value if skill appears multiple times
          const existing = skillsMap.get(skill.label)!
          if (skill.value > existing.value) {
            skillsMap.set(skill.label, skill)
          }
        }
      })
    })
    
    return Array.from(skillsMap.values()).sort((a, b) => b.value - a.value)
  })

  const totalYearsOfExperience = computed(() => {
    const firstExperience = experiences.value[experiences.value.length - 1]
    const lastExperience = experiences.value[0]
    
    if (!firstExperience?.startDate) return 0
    
    const startDate = new Date(firstExperience.startDate)
    const endDate = lastExperience?.endDate ? new Date(lastExperience.endDate) : new Date()
    
    return Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365))
  })

  const companies = computed(() => {
    const companySet = new Set<string>()
    experiences.value.forEach(exp => {
      if (exp.company) companySet.add(exp.company)
    })
    return Array.from(companySet).sort()
  })

  const industries = computed(() => {
    const industrySet = new Set<string>()
    experiences.value.forEach(exp => {
      if (exp.industry) industrySet.add(exp.industry)
    })
    return Array.from(industrySet).sort()
  })

  // Actions
  const toggleSkill = (skillLabel: string) => {
    const index = selectedSkills.value.indexOf(skillLabel)
    if (index > -1) {
      selectedSkills.value.splice(index, 1)
    } else {
      selectedSkills.value.push(skillLabel)
    }
  }

  const clearSkills = () => {
    selectedSkills.value = []
  }

  const setPrintMode = (mode: boolean) => {
    isPrintMode.value = mode
  }

  const getExperienceById = (id: string) => {
    return experiences.value.find(exp => exp.id === id)
  }

  const getExperiencesByCompany = (company: string) => {
    return experiences.value.filter(exp => exp.company === company)
  }

  const getExperiencesByIndustry = (industry: string) => {
    return experiences.value.filter(exp => exp.industry === industry)
  }

  return {
    // State
    experiences,
    selectedSkills,
    isPrintMode,
    
    // Getters
    filteredExperiences,
    allSkills,
    totalYearsOfExperience,
    companies,
    industries,
    
    // Actions
    toggleSkill,
    clearSkills,
    setPrintMode,
    getExperienceById,
    getExperiencesByCompany,
    getExperiencesByIndustry
  }
})
