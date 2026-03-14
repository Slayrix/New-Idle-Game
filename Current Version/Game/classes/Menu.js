import {helperFunctions} from "../helperFunctions.js";

export default class Menu {
    constructor() {
        this.container = helperFunctions.createElement("div", null, "menu")
    }

    appendElementToContainer(element) {
        this.container.append(element)
    }

    displayMenu() {
        document.body.append(this.container);
    }

    hideMenu() {
        this.container.remove;
    }
}