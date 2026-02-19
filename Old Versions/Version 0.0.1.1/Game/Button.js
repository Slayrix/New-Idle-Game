export default class Button {
    constructor(buttonText, onClick) {
        this.buttonVar = document.createElement("button");
        this.buttonText = buttonText;
        this.buttonVar.textContent = this.buttonText;
        this.buttonVar.addEventListener("click", onClick);
    }

    displayButton() {
        document.body.appendChild(this.buttonVar);
    }
}