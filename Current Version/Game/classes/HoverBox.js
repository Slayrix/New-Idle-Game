import {helperFunctions} from "../helperFunctions.js";

export default class HoverBox {
    constructor(buttonText, infoboxText, buttonEffect, infoboxElementText = []) {
        this.infoboxElementText = infoboxElementText;
        this.container = helperFunctions.createElement("div", null, "hoverContainer");
        this.button = helperFunctions.createElement("div", buttonText, "hoverButton");
        this.infobox = helperFunctions.createElement("div", infoboxText, "hoverInfobox");

        this.container.append(this.button);

        if (infoboxElementText.length > 0) {
            this.infoboxElements = [];
            for (let i = 0; i < infoboxElementText.length; i++) {
                this.infoboxElements.push(helperFunctions.createElement("div"));
                this.infobox.append(this.infoboxElements[i]);
            }
            this.updateText();
        }

        this.button.addEventListener("mouseenter", () => {
            this.container.append(this.infobox);
        });

        this.button.addEventListener("mouseleave", () => {
            this.infobox.remove();
        });

        this.button.addEventListener("click", buttonEffect);
    }

    updateText(newInfoboxElementText = []) {
        if (newInfoboxElementText.length > 0) {
            for (let i = 0; i < newInfoboxElementText.length; i++) {
                this.infoboxElementText[i] = newInfoboxElementText[i];
            }
        }
        
        for (let i = 0; i < this.infoboxElements.length; i++) {
            this.infoboxElements[i].textContent = this.infoboxElementText[i];
        }
    }
}