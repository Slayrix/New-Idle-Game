import {helperFunctions} from "../helperFunctions.js";

export default class Upgrade {
    constructor({upgradeName, upgradeInfo, upgradeCostAmount, upgradeCostCurrency, upgradeCostMultiplier, upgradeMaxLevel = null, upgradeEffect, upgradeGroup}) {
        this.cost = upgradeCostAmount;
        this.currency = upgradeCostCurrency;
        this.costMultiplier = upgradeCostMultiplier
        this.maxLevel = upgradeMaxLevel
        this.effect = upgradeEffect;
        this.level = 0;
        this.createUpgradeElements(upgradeName, upgradeInfo, upgradeGroup)
    }

    createUpgradeElements(upgradeName, upgradeInfo, upgradeGroup) {
        this.container = helperFunctions.createElement("div", null, "upgradeContainer");
        this.button = helperFunctions.createElement("div", upgradeName, "upgradeButton");
        this.infobox = helperFunctions.createElement("div", upgradeInfo, "upgradeInfobox");
        this.costText = helperFunctions.createElement("div")
        this.levelText = helperFunctions.createElement("div");
        this.updateText()
        this.container.append(this.button);
        this.infobox.append(this.costText);
        this.infobox.append(this.levelText);

        upgradeGroup.appendElement(this.container);

        this.button.addEventListener("mouseenter", () => {
            this.container.append(this.infobox);
        });

        this.button.addEventListener("mouseleave", () => {
            this.infobox.remove();
        });

        this.button.addEventListener("click", () => this.buyUpgrade());
    }

    updateText() {
        if (this.maxLevel != null) {
            this.levelText.textContent = "Level: " + this.level + " / " + this.maxLevel
        } else {
            this.levelText.textContent = "Level: " + this.level;
        }
        this.costText.textContent = "Cost: " + this.cost + " " + this.currency.currencyName;
    }

    buyUpgrade() {
        if (this.currency.getAmount() >= this.cost && (this.level < this.maxLevel || this.maxLevel == null)) {
            this.currency.subAmount(this.cost);
            this.effect();
            this.level += 1;
            this.cost *= this.costMultiplier;
            this.updateText();
        }
    }
}