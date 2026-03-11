export default class UpgradeGroup {
    constructor(displayMenu) {
        this.upgradeGroupContainer = document.createElement("div");
        this.upgradeGroupContainer.style.marginTop = "4px";
        this.upgradeGroupContainer.style.marginLeft = "50px";
        displayMenu.appendElementToContainer(this.upgradeGroupContainer);
    }

    displayUpgradeGroup() {
        document.body.append(this.upgradeGroupContainer);
    }

    appendElementToContainer(element) {
        this.upgradeGroupContainer.append(element)
    }
}