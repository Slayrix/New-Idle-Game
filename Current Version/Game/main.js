import Button from "./classes/Button.js";
import {menus} from "./vars/gameVars.js";
import {currencies} from "./vars/gameVars.js";
import {playerStats} from "./vars/gameVars.js";
import {upgrades} from "./vars/upgrades.js";

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