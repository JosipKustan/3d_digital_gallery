export const NAV_HEIGHT = 64;         // TopNavigationWrapper height (NavMenuStyles.js)
export const SECTION_NAV_HEIGHT = 54; // StickyNav height (NavMenuStyles.js)
const BREATHING_ROOM = 16;

export function scrollToSection(
  id,
  offset = NAV_HEIGHT + SECTION_NAV_HEIGHT + BREATHING_ROOM,
) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - offset,
    behavior: "smooth",
  });
}
