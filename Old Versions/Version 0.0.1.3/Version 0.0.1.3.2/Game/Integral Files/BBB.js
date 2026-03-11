import Upgrade from "./Upgrade.js";
import {currencies} from "./currencies.js";
import {playerStats} from "./playerStats.js";
import {upgradeGroups} from "./upgradeGroups.js";

export const secret = {
    bombasticBootyBitches: new Upgrade({
        upgradeCurrencyCost: currencies.energy,
        upgradeAmountCost: 100,
        upgradeCostMult: 1000,
        upgradeEffect: () => {
            currencies.energy.addAmountToGainPerSecond(500);
        },
        upgradeMaxLevel: 2,
        upgradeName: "Bombastic Booty Bitches",
        upgradeInfo: "Their booties be bouncin",
        upgradeGroup: upgradeGroups.upgradeGroup
    })
}

