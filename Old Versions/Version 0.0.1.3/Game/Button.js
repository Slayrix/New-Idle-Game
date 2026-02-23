export default class Button {
    constructor(buttonText, buttonFunction) {
        this.buttonVar = document.createElement("button");
        this.buttonText = buttonText;
        this.buttonVar.textContent = this.buttonText;
        this.buttonVar.addEventListener("click", buttonFunction);
    }

    displayButton() {
        document.body.appendChild(this.buttonVar);
    }

    hideButton() {
        this.buttonVar.remove();
    }
}