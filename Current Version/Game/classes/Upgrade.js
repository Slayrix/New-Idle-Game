import {helperFunctions} from "../helperFunctions.js";

export default class Upgrade {
    constructor({upgradeName, upgradeInfo, upgradeCostAmount, upgradeCostCurrency, upgradeEffect, upgradeGroup}) {
        this.cost = upgradeCostAmount;
        this.currency = upgradeCostCurrency;
        this.effect = upgradeEffect;

        this.container = helperFunctions.createElement("div", null, "upgradeContainerNew");
        this.button = helperFunctions.createElement("div", upgradeName, "upgradeButton");
        this.infobox = helperFunctions.createElement("div", upgradeInfo, "upgradeInfobox");
        this.costText = helperFunctions.createElement("div", "Costs: " + upgradeCostAmount + " " + upgradeCostCurrency.currencyName)
        this.container.append(this.button);
        this.infobox.append(this.costText);

        upgradeGroup.appendElement(this.container);

        this.button.addEventListener("mouseenter", () => {
            this.container.append(this.infobox);
        });

        this.button.addEventListener("mouseleave", () => {
            this.infobox.remove();
        });

        this.button.addEventListener("click", () => this.buyUpgrade());
    }

    buyUpgrade() {
        if (this.currency.getAmount() >= this.cost) {
            this.currency.subAmount(this.cost);
            this.effect();
        }
    }
}