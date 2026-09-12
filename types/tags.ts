export interface Tag {
    id: number
    tag_name: string
}

export interface TagWithPrimary extends Tag {
    is_primary: boolean
}

export interface TagToProject {
    project_id : number,
    tag_id: number,
    is_primary: boolean
}