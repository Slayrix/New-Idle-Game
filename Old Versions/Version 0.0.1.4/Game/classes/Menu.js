import {helperFunctions} from "../helperFunctions.js";

export default class Menu {
    static currentMenu = null;

    constructor(defaultMenu = null) {
        this.container = helperFunctions.createElement("div", null, "menu")

        if (defaultMenu != null) {
            Menu.setCurrentMenu(this);
        }
    }

    appendElementToContainer(element) {
        this.container.append(element)
    }

    static setCurrentMenu(menuClass) {
        if (Menu.currentMenu != null) {
            Menu.hideMenu();
        }
        Menu.currentMenu = menuClass
        Menu.displayCurrentMenu();
    }

    static displayCurrentMenu() {
        Menu.hideMenu();
        document.body.append(Menu.currentMenu.container);
    }

    static hideMenu() {
        Menu.currentMenu.container.remove();
    }
}