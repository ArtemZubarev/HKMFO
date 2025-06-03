export function useSmoothScroll() {
  function scrollToSection(href: string, offset = 0) {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
  return { scrollToSection };
}
