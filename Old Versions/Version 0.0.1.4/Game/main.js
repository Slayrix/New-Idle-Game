import {currencies} from "./vars/gameVars.js";
import {upgrades} from "./vars/upgrades.js";

window.debug = {
    currencies,
};

function gameLoop() {
    currencies.energy.genCurrency();
    setTimeout(gameLoop, 1000);
}

gameLoop();