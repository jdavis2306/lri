export default function blurActiveElement() {
  if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
}
