import {helperFunctions} from "../helperFunctions.js";

export default class Button {
    constructor(buttonText, buttonFunction, displayMenu = null, posX = null, posY = null, buttonClass = "button") {
        this.buttonVar = helperFunctions.createElement("button", buttonText, buttonClass)
        this.buttonVar.addEventListener("click", buttonFunction);
        
        if (displayMenu != null) {
            displayMenu.appendElementToContainer(this.buttonVar);
            this.buttonVar.style.left = posX + "px";
            this.buttonVar.style.top = posY + "px";
        }
    }

    displayButton() {
        document.body.appendChild(this.buttonVar);
    }

    hideButton() {
        this.buttonVar.remove();
    }
}