import {currencies} from "./vars/gameVars.js";
import {upgrades} from "./vars/upgrades.js";
import HoverBox from "./classes/HoverBox.js";
import Button from "./classes/Button.js";
import {menus} from "./vars/gameVars.js";
import {helperFunctions} from "./helperFunctions.js";

const container = helperFunctions.createElement("div", null, "defaultContainer");
const bigBang = new Button("Big Bang", () => {}, null, null, null, "upgradeButton");
const hoverBox = new HoverBox("Create Big Bang", [], bigBang.buttonVar, container);

container.append(bigBang.buttonVar);
container.style.left = "100px";
container.style.top = "100px";
menus.mainMenu.appendElementToContainer(container);

window.debug = {
    currencies,
};

function gameLoop() {
    currencies.energy.genCurrency();
    setTimeout(gameLoop, 1000);
}

gameLoop();