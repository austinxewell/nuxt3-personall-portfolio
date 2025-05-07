import type { ProjectImage, ProjectTag, Project } from '~/types/projects'

export function findThumbnailImage(images: ProjectImage[]): ProjectImage | undefined {
    return images.find(image => image.is_thumbnail)
}

export function findPrimaryTags(tags: ProjectTag[]): ProjectTag[] | undefined {
    return tags.filter(tag => tag.is_primary)
}

export function findFavoriteProjects(projects: Project[]): Project[] | undefined {
    return projects.filter(project => project.isFavorite)
}