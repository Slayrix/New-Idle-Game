export const helperFunctions = {
    createElement: (type, textContent = null, className = null) => {
        const element = document.createElement(type);
        if (textContent != null) element.textContent = textContent;
        if (className != null) element.classList.add(className);
        return element;
    },
}

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