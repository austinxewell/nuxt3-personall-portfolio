export function useSkillsService() {
    const { $axios } = useNuxtApp()

    async function getSkills() {
        return $axios.get('/skills')
    }

    return { getSkills }
}