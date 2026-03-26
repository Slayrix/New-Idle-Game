import {helperFunctions} from "../helperFunctions.js";

export default class Button {
    constructor(buttonText, displayMenu = null, posX, posY, buttonFunction, buttonClass = "button") {
        this.buttonVar = helperFunctions.createElement("button", buttonText, buttonClass)
        this.buttonVar.addEventListener("click", buttonFunction);
        this.buttonVar.style.left = posX + "px";
        this.buttonVar.style.top = posY + "px";
        if (displayMenu != null) {displayMenu.appendElementToContainer(this.buttonVar)};
    }

    displayButton() {
        document.body.appendChild(this.buttonVar);
    }

    hideButton() {
        this.buttonVar.remove();
    }
}