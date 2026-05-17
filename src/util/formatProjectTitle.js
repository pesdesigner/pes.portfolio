export function formatProjectTitle(projectTitle) {
  if (!projectTitle) {
    return ''
  }

  return projectTitle
    .trim()
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}
