import {helperFunctions} from "../helperFunctions.js";

export default class HoverBox {
    constructor(infoboxText, infoboxElementText = [], hoverElement, containerElement) {
        this.infoboxElementText = infoboxElementText;
        this.infobox = helperFunctions.createElement("div", infoboxText, "hoverInfobox");

        if (infoboxElementText.length > 0) {
            this.infoboxElements = [];
            for (let i = 0; i < infoboxElementText.length; i++) {
                this.infoboxElements.push(helperFunctions.createElement("div"));
                this.infobox.append(this.infoboxElements[i]);
            }
            this.updateText();
        }

        hoverElement.addEventListener("mouseenter", () => {
            containerElement.append(this.infobox);
        });

        hoverElement.addEventListener("mouseleave", () => {
            this.infobox.remove();
        });
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