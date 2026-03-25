import Upgrade from "../classes/Upgrade.js";
import {currencies} from "../vars/gameVars.js";
import {playerStats} from "../vars/gameVars.js";
import {upgradeGroups} from "../vars/gameVars.js";

/*
Template Upgrade:
upgradeName: new Upgrade({
        upgradeName: ,
        upgradeInfo: ,
        upgradeCostAmount: ,
        upgradeCostCurrency: ,
        upgradeEffect: () => ,
        upgradeGroup: 
    }),
*/

export const upgrades = {
    genEnergyUpgrade: new Upgrade({
        upgradeName: "Gen Energy Upgrade",
        upgradeInfo: "Generate +0.01 more energy per click per level",
        upgradeCostAmount: 0.1,
        upgradeCostCurrency: currencies.energy,
        upgradeEffect: () => {
            playerStats.energyGenPerClick += .01;
        },
        upgradeGroup: upgradeGroups.upgradeGroup
    }),
    autoGenEnergyUpgrade: new Upgrade({
        upgradeName: "Auto Gen Energy",
        upgradeInfo: "Generate +0.01 energy per second",
        upgradeCostAmount: 1,
        upgradeCostCurrency: currencies.energy,
        upgradeEffect: () => {
            currencies.energy.addAmountToGainPerSecond(0.01);
        },
        upgradeGroup: upgradeGroups.upgradeGroup
    })
}