export default class Button {
    constructor(buttonText, displayMenu, buttonFunction) {
        this.buttonVar = document.createElement("button");
        this.buttonText = buttonText;
        this.buttonVar.textContent = this.buttonText;
        this.buttonVar.addEventListener("click", buttonFunction);
        displayMenu.appendElementToContainer(this.buttonVar)
        
    }

    displayButton() {
        document.body.appendChild(this.buttonVar);
    }

    hideButton() {
        this.buttonVar.remove();
    }
}