import Button from "./Button.js";
import {upgrades} from "./upgrades.js";
import {currencies} from "./currencies.js";
import {playerStats} from "./playerStats.js";

const genEnergyButton = new Button("Gen Energy", () => currencies.energy.addAmount(playerStats.energyGenPerClick));

window.debug = {
    currencies,
};

const upgradeGroup = document.createElement("div");
upgradeGroup.style.marginTop = "4px";
upgradeGroup.style.marginLeft = "50px";

currencies.energy.displayCurrency();
genEnergyButton.displayButton();
document.body.appendChild(upgradeGroup);
upgrades.genEnergyUpgrade.displayUpgrade(upgradeGroup);
upgrades.autoGenEnergyUpgrade.displayUpgrade(upgradeGroup);

function gameLoop() {
    currencies.energy.genCurrency();
    setTimeout(gameLoop, 1000);
}

gameLoop();