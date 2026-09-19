import type { SkillPayload, UpdateSkillPayload } from '~/types/skills'

export function useSkillsService() {
    const { $axios } = useNuxtApp()

    async function getSkills() {
        return $axios.get('/skills')
    }

    async function postSkill(payload: SkillPayload) {
        return $axios.post('/skills', payload)
    }

    async function updateSkill(id: number, payload: UpdateSkillPayload) {
        return $axios.put(`/skills/${id}`, payload)
    }

    async function deleteSkill(id: number) {
        return $axios.delete(`/skills/${id}`)
    }

    return {
        getSkills,
        postSkill,
        updateSkill,
        deleteSkill
    }
}