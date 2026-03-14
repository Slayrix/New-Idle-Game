import {helperFunctions} from "./helperFunctions.js";

export default class Button {
    constructor(buttonText, displayMenu, buttonFunction, buttonClass = "button") {
        this.buttonVar = helperFunctions.createElement("button", buttonText, buttonClass)
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