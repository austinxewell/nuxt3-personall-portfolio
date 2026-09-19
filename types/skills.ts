
export interface Skill {
    id: number
    name: string
    level: string
    category: string
    icon: string
    created_at: string
}

export interface SkillPayload {
    name: string,
    level: string,
    category: string,
    icon: string
}

export interface UpdateSkillPayload {
    name?: string,
    level?: string,
    category?: string,
    icon?: string
}