import { computed } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'

export function useSkillsState() {
  const store = usePortfolioStore()

  const selectedSkills = computed(() => store.selectedSkills)
  const allSkills = computed(() => store.allSkills)
  const filteredExperiences = computed(() => store.filteredExperiences)

  const toggleSkill = (skillLabel: string) => {
    store.toggleSkill(skillLabel)
  }

  const clearSkills = () => {
    store.clearSkills()
  }

  return {
    selectedSkills,
    allSkills,
    filteredExperiences,
    toggleSkill,
    clearSkills
  }
}