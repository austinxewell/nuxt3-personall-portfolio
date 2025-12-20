import type { ProjectImage, ProjectTag } from '~/types/projects'

export function findThumbnailImage(images: ProjectImage[]): ProjectImage | undefined {
    return images.find(image => image.is_thumbnail)
}

export function findPrimaryTags(tags: ProjectTag[]): ProjectTag[] | undefined {
    return tags.filter(tag => tag.is_primary)
}