import { reactive } from "vue";

/**
 * Global shared state for selected skills.
 * This reactive state is shared across all components.
 */
export const skillsState = reactive({
    selectedSkills: {} as Record<string, boolean>, // Tracks selected skills globally
});