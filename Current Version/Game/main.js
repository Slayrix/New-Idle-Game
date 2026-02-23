import Currency from "./Currency.js";
import Button from "./Button.js";
import Upgrade from "./Upgrade.js";
import Cheats from "./Cheats.js";

const cheats = new Cheats();

let energyGenPerClick = .01;

const energy = new Currency("Energy: ");
const genEnergyButton = new Button("Gen Energy", () => energy.addAmount(energyGenPerClick));

const genEnergyUpgrade = new Upgrade({
    upgradeCurrencyCost: energy,
    upgradeAmountCost: .10,
    upgradeCostMult: 50,
    upgradeEffect: () => buyGenEnergyUpgrade(),
    upgradeMaxLevel: 5,
    upgradeName: "Gen Energy Upgrade",
    upgradeInfo: "Generate +0.01 more energy per click per level"
});

const autoGenEnergyUpgrade = new Upgrade({
    upgradeCurrencyCost: energy,
    upgradeAmountCost: 1,
    upgradeCostMult: 1.1,
    upgradeEffect: () => buyAutoGenEnergyUpgrade(),
    upgradeMaxLevel: 5,
    upgradeName: "Auto Gen Energy",
    upgradeInfo: "Generate +0.01 energy per second"
});

function buyGenEnergyUpgrade() {
    energyGenPerClick += .01;
}

function buyAutoGenEnergyUpgrade() {
    energy.addAmountToGainPerSecond(.01);
}

const upgradeGroup = document.createElement("div");
upgradeGroup.style.marginTop = "4px";
upgradeGroup.style.marginLeft = "50px";

energy.displayCurrency();
genEnergyButton.displayButton();
document.body.appendChild(upgradeGroup);
genEnergyUpgrade.displayUpgrade(upgradeGroup);
autoGenEnergyUpgrade.displayUpgrade(upgradeGroup);

function gameLoop() {
    energy.genCurrency();
    setTimeout(gameLoop, 1000);
}

gameLoop();