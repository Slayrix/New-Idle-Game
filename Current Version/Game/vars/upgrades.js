import Upgrade from "../classes/Upgrade.js";
import {currencies} from "../vars/gameVars.js";
import {playerStats} from "../vars/gameVars.js";
import {upgradeGroups} from "../vars/gameVars.js";

export const upgrades = {
    genEnergyUpgrade: new Upgrade({
        upgradeCurrencyCost: currencies.energy,
        upgradeAmountCost: .10,
        upgradeCostMult: 50,
        upgradeEffect: () => {
            playerStats.energyGenPerClick += .01;
        },
        upgradeMaxLevel: 5,
        upgradeName: "Gen Energy Upgrade",
        upgradeInfo: "Generate +0.01 more energy per click per level",
        upgradeGroup: upgradeGroups.upgradeGroup
    }),
    autoGenEnergyUpgrade: new Upgrade({
        upgradeCurrencyCost: currencies.energy,
        upgradeAmountCost: 1,
        upgradeCostMult: 1.1,
        upgradeEffect: () => {
            currencies.energy.addAmountToGainPerSecond(.01);
        },
        upgradeMaxLevel: 5,
        upgradeName: "Auto Gen Energy",
        upgradeInfo: "Generate +0.01 energy per second",
        upgradeGroup: upgradeGroups.upgradeGroup
    }),
}