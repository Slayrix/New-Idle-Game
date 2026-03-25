import {menus, currencies} from "./vars/gameVars.js";
import {upgrades} from "./vars/upgrades.js";

menus.menu.displayMenu();

window.debug = {
    currencies,
};

function gameLoop() {
    currencies.energy.genCurrency();
    setTimeout(gameLoop, 1000);
}

gameLoop();