import Currency from "./Currency.js";
import Button from "./Button.js";
import Upgrade from "./Upgrade.js";

let energyGenPerClick = 1;

const energy = new Currency("Energy: ");
const genEnergyButton = new Button("Gen Energy", () => energy.addAmount(energyGenPerClick));

const genEnergyUpgrade = new Upgrade({
    upgradeCurrencyCost: energy,
    upgradeAmountCost: 10,
    upgradeCostMult: 100,
    upgradeEffect: () => buyGenEnergyUpgrade(),
    upgradeMaxLevel: 5,
    upgradeName: "Gen Energy Upgrade",
    upgradeInfo: "Generate +1 more energy per click per level"
});

const autoGenEnergyUpgrade = new Upgrade({
    upgradeCurrencyCost: energy,
    upgradeAmountCost: 50,
    upgradeCostMult: 1.5,
    upgradeEffect: () => buyAutoGenEnergyUpgrade(),
    upgradeMaxLevel: 5,
    upgradeName: "Auto Gen Energy",
    upgradeInfo: "Generate +1 energy per second"
});

function buyGenEnergyUpgrade() {
    energyGenPerClick += 1;
}

function buyAutoGenEnergyUpgrade() {
    energy.addAmountToGainPerSecond(1);
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