export default class Menu {
    constructor() {
        this.container = document.createElement("div");
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