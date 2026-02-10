/**
 * Shared smooth-scroll helper that accounts for the fixed header height
 */

/**
 * Get the current fixed header height dynamically
 */
export function getHeaderOffset(): number {
  const header = document.querySelector('header');
  if (header) {
    return header.offsetHeight;
  }
  // Fallback to a reasonable default if header not found
  return 120;
}

/**
 * Smooth scroll to a section by ID, accounting for the fixed header
 */
export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = getHeaderOffset();
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}
