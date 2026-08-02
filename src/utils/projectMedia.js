/** Normalize project media: prefer `images[]`, fall back to single `image`. */
export function getProjectImages(project) {
  if (!project) return []
  if (Array.isArray(project.images) && project.images.length > 0) {
    return project.images.filter(Boolean)
  }
  if (project.image) return [project.image]
  return []
}
