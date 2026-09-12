export const PROJECT_STEP = {
    DETAILS: 0,
    REVIEW: 1,
    CONFIRM: 2
} as const

export type ProjectStep = (typeof PROJECT_STEP)[keyof typeof PROJECT_STEP]