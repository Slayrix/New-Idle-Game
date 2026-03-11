import Button from "./Button.js";
import {menus} from "./menus.js";
import {upgrades} from "./upgrades.js";
import {currencies} from "./currencies.js";
import {playerStats} from "./playerStats.js";

const genEnergyButton = new Button("Gen Energy", menus.menu, () => currencies.energy.addAmount(playerStats.energyGenPerClick));

menus.menu.displayMenu();

window.debug = {
    currencies,
};

function gameLoop() {
    currencies.energy.genCurrency();
    setTimeout(gameLoop, 1000);
}

gameLoop();