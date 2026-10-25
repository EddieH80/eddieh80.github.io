// "Read more" toggles for clamped card content. A toggle is a button with
// data-expand-toggle whose aria-controls points at the clamped element.
const toggles = [
  ...document.querySelectorAll<HTMLButtonElement>("[data-expand-toggle]"),
];
const contentFor = (button: HTMLButtonElement) =>
  document.getElementById(button.getAttribute("aria-controls") ?? "");

// Show a toggle only when its collapsed content is actually truncated. The
// button keeps its space when invisible so collapsed cards stay the same
// height. Call again after showing previously hidden content.
export const updateExpandToggles = () => {
  toggles.forEach((button) => {
    const content = contentFor(button);
    if (!content || content.dataset.expanded === "true") return;
    const truncated = content.scrollHeight > content.clientHeight + 1;
    button.classList.toggle("invisible", !truncated);
    content.dataset.truncated = String(truncated);
  });
};

toggles.forEach((button) =>
  button.addEventListener("click", () => {
    const content = contentFor(button);
    if (!content) return;
    const expanded = content.dataset.expanded !== "true";
    content.dataset.expanded = String(expanded);
    content.dataset.truncated = String(!expanded);
    button.setAttribute("aria-expanded", String(expanded));
    button.textContent = expanded ? "Show less" : "Read more";
  }),
);

window.addEventListener("resize", updateExpandToggles);
document.fonts.ready.then(updateExpandToggles);
updateExpandToggles();
