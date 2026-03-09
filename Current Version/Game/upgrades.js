import Upgrade from "./Upgrade.js";
import {currencies} from "./currencies.js";
import {playerStats} from "./playerStats.js";

export const upgrades = {
    genEnergyUpgrade: new Upgrade({
        upgradeCurrencyCost: currencies.energy,
        upgradeAmountCost: .10,
        upgradeCostMult: 50,
        upgradeEffect: () => buyGenEnergyUpgrade(),
        upgradeMaxLevel: 5,
        upgradeName: "Gen Energy Upgrade",
        upgradeInfo: "Generate +0.01 more energy per click per level"
    }),
    autoGenEnergyUpgrade: new Upgrade({
        upgradeCurrencyCost: currencies.energy,
        upgradeAmountCost: 1,
        upgradeCostMult: 1.1,
        upgradeEffect: () => buyAutoGenEnergyUpgrade(),
        upgradeMaxLevel: 5,
        upgradeName: "Auto Gen Energy",
        upgradeInfo: "Generate +0.01 energy per second"
    })
}

function buyGenEnergyUpgrade() {
    playerStats.energyGenPerClick += .01;
}

function buyAutoGenEnergyUpgrade() {
    currencies.energy.addAmountToGainPerSecond(.01);
}