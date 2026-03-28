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
    genEnergyButton: new Button("Gen Energy", menus.mainMenu, 0, 25, () => currencies.energy.addAmount(playerStats.energyGenPerClick)),
    settingsButton: new Button("Settings", menus.mainMenu, 100, 0, () => {Menu.setCurrentMenu(menus.settingsMenu)}),
    settingsBackButton: new Button("Back", menus.settingsMenu, 100, 0, () => {Menu.setCurrentMenu(menus.mainMenu)}),
    saveButton: new Button("Save Game", menus.settingsMenu, 0, 0, () => {}),
    loadButton: new Button("Load Game", menus.settingsMenu, 0, 25, () => {})
}