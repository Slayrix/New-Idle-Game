export function createElement(type, textContent = null, className = null) {
    const element = document.createElement(type);
    if (textContent != null) element.textContent = textContent;
    if (className != null) element.classList.add(className);
    return element;
}