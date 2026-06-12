export function ScrollToElement(elementId) {
  const targetElement = document.getElementById(elementId);
  if (!targetElement) {
    return;
  }
  targetElement.scrollIntoView({ behavior: "smooth" });
}
