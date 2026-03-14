import Currency from "../classes/Currency.js";
import Menu from "../classes/Menu.js";
import UpgradeGroup from "../classes/UpgradeGroup.js";

export const menus = {
    menu: new Menu(),
}

export const currencies = {
    energy: new Currency("Energy: ", menus.menu)
}

export const playerStats = {
    energyGenPerClick: 0.01,
}

export const upgradeGroups = {
    upgradeGroup: new UpgradeGroup(menus.menu),
}