import HoverBox from "./HoverBox.js";

export default class Upgrade {
    constructor({upgradeName, upgradeInfo, upgradeCostAmount, upgradeCostCurrency, upgradeCostMultiplier, upgradeMaxLevel = null, upgradeEffect, upgradeGroup}) {
        this.cost = upgradeCostAmount;
        this.currency = upgradeCostCurrency;
        this.costMultiplier = upgradeCostMultiplier
        this.maxLevel = upgradeMaxLevel
        this.effect = upgradeEffect;
        this.level = 0;
        this.hoverBox = new HoverBox(upgradeName, upgradeInfo, () => this.buyUpgrade(), ["", ""]);
        this.updateText();
        
        upgradeGroup.appendElement(this.hoverBox.container);
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