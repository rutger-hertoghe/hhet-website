export function ScrollToElement(elementId) {
  const el = document.getElementById(elementId);
  el.scrollIntoView({ behavior: "smooth" });
}