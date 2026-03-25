import {menus, currencies, playerStats} from "./vars/gameVars.js";
import {upgrades} from "./vars/upgrades.js";
import Upgrade from "./classes/NewUpgrade.js";
import UpgradeGroup from "./classes/NewUpgradeGroup.js";

menus.menu.displayMenu();

const testUpgradeGroup = new UpgradeGroup();

/*
const templateUpgrade = new Upgrade({
    upgradeName: ,
    upgradeInfo: ,
    upgradeCostAmount: ,
    upgradeCostCurrency: ,
    upgradeEffect: () => ,
    upgradeGroup: 
})
*/

const genEnergyUpgrade = new Upgrade({
    upgradeName: "Gen Energy Upgrade",
    upgradeInfo: "Generate +0.01 more energy per click per level",
    upgradeCostAmount: 0.1,
    upgradeCostCurrency: currencies.energy,
    upgradeEffect: () => {
        playerStats.energyGenPerClick += .01;
    },
    upgradeGroup: testUpgradeGroup
})

const autoGenEnergyUpgrade = new Upgrade({
    upgradeName: "Auto Gen Energy",
    upgradeInfo: "Generate +0.01 energy per second",
    upgradeCostAmount: 1,
    upgradeCostCurrency: currencies.energy,
    upgradeEffect: () => {
        currencies.energy.addAmountToGainPerSecond(0.01);
    },
    upgradeGroup: testUpgradeGroup
})

document.body.append(testUpgradeGroup.container);

window.debug = {
    currencies,
};

function gameLoop() {
    currencies.energy.genCurrency();
    setTimeout(gameLoop, 1000);
}

gameLoop();