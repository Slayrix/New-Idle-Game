import {helperFunctions} from "../helperFunctions.js";

export default class UpgradeGroup {
    constructor(menu, xPos, yPos) {
        this.container = helperFunctions.createElement("div", null, "upgradeGroup");
        this.container.style.top = xPos + "px";
        this.container.style.left = yPos + "px";
        menu.appendElementToContainer(this.container);
    }

    appendElement(element) {
        this.container.append(element);
    }
}