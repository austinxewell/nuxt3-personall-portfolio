export interface TagPayload {
    tag_name: string
}

export interface Tag {
    id: number
    tag_name: string
}

export interface TagWithPrimary extends Tag {
    is_primary: boolean
}

export interface DeleteTagToProjectPayload {
    project_id: number,
    tag_id: number
}

export interface TagToProject extends DeleteTagToProjectPayload {
    is_primary: boolean
}
