import Currency from "../classes/Currency.js";
import Menu from "../classes/Menu.js";
import UpgradeGroup from "../classes/UpgradeGroup.js";
import Button from "../classes/Button.js";

export const menus = {
    menu: new Menu(),
}

export const currencies = {
    energy: new Currency("Energy", menus.menu)
}

export const playerStats = {
    energyGenPerClick: 0.01,
}

export const upgradeGroups = {
    upgradeGroup: new UpgradeGroup(menus.menu),
}

export const buttons = {
    genEnergyButton: new Button("Gen Energy", menus.menu, () => currencies.energy.addAmount(playerStats.energyGenPerClick)),
}