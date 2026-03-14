import {helperFunctions} from "../helperFunctions.js";

export default class UpgradeGroup {
    constructor(displayMenu) {
        this.upgradeGroupContainer = helperFunctions.createElement("div", null, "upgradeGroup");
        displayMenu.appendElementToContainer(this.upgradeGroupContainer);
    }

    displayUpgradeGroup() {
        document.body.append(this.upgradeGroupContainer);
    }

    appendElementToContainer(element) {
        this.upgradeGroupContainer.append(element)
    }
}