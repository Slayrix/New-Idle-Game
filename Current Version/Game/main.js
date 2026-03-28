import {currencies} from "./vars/gameVars.js";
import {upgrades} from "./vars/upgrades.js";
import HoverBox from "./classes/HoverBox.js";
import {menus} from "./vars/gameVars.js";

//const bigBang = new HoverBox("Big Bang", () => {}, "Start Big Bang", [], menus.mainMenu, 20, 70);

window.debug = {
    currencies,
};

function gameLoop() {
    currencies.energy.genCurrency();
    setTimeout(gameLoop, 1000);
}

gameLoop();