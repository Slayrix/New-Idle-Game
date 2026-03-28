import Button from "./Button.js";
import HoverBox from "./HoverBox.js";
import {helperFunctions} from "../helperFunctions.js";

export default class Upgrade {
    constructor({upgradeName, upgradeInfo, upgradeCostAmount, upgradeCostCurrency, upgradeCostMultiplier, upgradeMaxLevel = null, upgradeEffect, upgradeGroup}) {
        this.cost = upgradeCostAmount;
        this.currency = upgradeCostCurrency;
        this.costMultiplier = upgradeCostMultiplier
        this.maxLevel = upgradeMaxLevel
        this.effect = upgradeEffect;
        this.level = 0;
        this.container = helperFunctions.createElement("div", null, "defaultContainer");
        this.container.style.marginRight = "5px";
        this.button = new Button(upgradeName, () => this.buyUpgrade(), null, null, null, "upgradeButton");
        this.hoverBox = new HoverBox(upgradeInfo, ["", ""], this.button.buttonVar, this.container);

        this.container.append(this.button.buttonVar);

        this.updateText();
        
        upgradeGroup.appendElement(this.container);
    }

    updateText() {
        if (this.maxLevel != null) {
            this.levelText = "Level: " + this.level + " / " + this.maxLevel
        } else {
            this.levelText = "Level: " + this.level
        }
        this.costText = this.cost + " " + this.currency.currencyName
        this.hoverBox.updateText([this.costText, this.levelText])
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