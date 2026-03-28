import Currency from "../classes/Currency.js";
import Menu from "../classes/Menu.js";
import UpgradeGroup from "../classes/UpgradeGroup.js";
import Button from "../classes/Button.js";

export const menus = {
    mainMenu: new Menu("Default"),
    settingsMenu: new Menu(),
}

export const currencies = {
    energy: new Currency("Energy", menus.mainMenu)
}

export const playerStats = {
    energyGenPerClick: 0.01,
}

export const upgradeGroups = {
    upgradeGroup: new UpgradeGroup(menus.mainMenu, 200, 200),
}

export const buttons = {
    genEnergyButton: new Button("Gen Energy", () => currencies.energy.addAmount(playerStats.energyGenPerClick), menus.mainMenu, 0, 25),
    settingsButton: new Button("Settings", () => {Menu.setCurrentMenu(menus.settingsMenu)}, menus.mainMenu, 100, 0),
    settingsBackButton: new Button("Back", () => {Menu.setCurrentMenu(menus.mainMenu)}, menus.settingsMenu, 100, 0),
    saveButton: new Button("Save Game", () => {}, menus.settingsMenu, 0, 0),
    loadButton: new Button("Load Game", () => {}, menus.settingsMenu, 0, 25)
}