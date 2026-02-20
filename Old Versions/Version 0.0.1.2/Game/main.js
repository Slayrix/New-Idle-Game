import Currency from "./Currency.js";
import Button from "./Button.js";
import Upgrade from "./Upgrade.js";

const energy = new Currency("Energy: ");
const genEnergyButton = new Button("Gen Energy", () => energy.addAmount(1));

const upgrade = new Upgrade(
    energy, 
    10,
    () => {
        const matter = new Currency("Matter: ");
        matter.displayCurrency();
    },
    1,
    "Big Bang",
    "Unlocks Matter"
);

const upgradeTest = new Upgrade(
    energy, 
    10,
    () => {
        const matter = new Currency("Matter: ");
        matter.displayCurrency();
    },
    1,
    "Test Test Test",
    "Test Test"
);

const upgradeTest2 = new Upgrade(
    energy, 
    10,
    () => {
        const matter = new Currency("Matter: ");
        matter.displayCurrency();
    },
    1,
    "Test Test",
    "Test Test Test Test Test Test Test Test Test Test"
);

const upgradeGroup = document.createElement("div");
upgradeGroup.style.marginTop = "4px";
upgradeGroup.style.marginLeft = "50px";

energy.displayCurrency();
genEnergyButton.displayButton();
document.body.appendChild(upgradeGroup);
upgrade.displayUpgrade(upgradeGroup);
upgradeTest.displayUpgrade(upgradeGroup);
upgradeTest2.displayUpgrade(upgradeGroup);