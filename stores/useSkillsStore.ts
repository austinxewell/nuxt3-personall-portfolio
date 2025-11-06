import { defineStore } from 'pinia'
import { useSkillsService } from '@/services/skillsService'
import { handleApiError } from '@/utils/errorHandler'

export const useSkillsStore = defineStore('skills', {
    state: () => ({
        skills: [],
        loading: false,
        error: null as string | null
    }),

    actions: {
        async fetchSkills() {
            this.loading = true
            this.error = null
            const { getSkills } = useSkillsService()

            try {
                const res = await getSkills()
                this.skills = res.data
            } catch (err) {
                this.error = handleApiError(err)
            } finally {
                this.loading = false
            }
        }
    }
})