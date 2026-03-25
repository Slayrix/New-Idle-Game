import {helperFunctions} from "../helperFunctions.js";

export default class UpgradeGroup {
    constructor(menu) {
        this.container = helperFunctions.createElement("div", null, "upgradeGroupNew");
        menu.appendElementToContainer(this.container);
    }

    appendElement(element) {
        this.container.append(element);
    }
}