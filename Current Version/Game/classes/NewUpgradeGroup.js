import {helperFunctions} from "../helperFunctions.js";

export default class UpgradeGroup {
    constructor() {
        this.container = helperFunctions.createElement("div", null, "upgradeGroupNew");
    }

    appendElement(element) {
        this.container.append(element);
    }
}