import Button from "./Button.js";

export default class Upgrade {
    constructor({
        upgradeCurrencyCost, 
        upgradeAmountCost, 
        upgradeCostMult,
        upgradeEffect, 
        upgradeMaxLevel, 
        upgradeName, 
        upgradeInfo
    }) {
        this.currencyCost = upgradeCurrencyCost;
        this.amountCost = upgradeAmountCost;
        this.upgradeCostMult = upgradeCostMult;
        this.effect = upgradeEffect;
        this.currentLevel = 0;
        this.maxLevel = upgradeMaxLevel;
        this.closeInfoboxTimeout = null;
        this.createUpgradeContainer(upgradeName, upgradeInfo);
    }

    static currentlyOpenInfobox = null;

    createElement(type, textContent = null, className) {
        const element = document.createElement(type);
        if (textContent) element.textContent = textContent;
        element.classList.add(className);
        return element;
    }

    createUpgradeContainer(upgradeName, upgradeInfo) {
        this.upgradeContainer = this.createElement("div", null, "upgradeContainer");
        this.upgradeNameText = this.createElement("div", upgradeName, "upgradeNameText");
        this.infoBox = this.createElement("div", null, "upgradeInfoBox");
        this.upgradeInfoText = this.createElement("div", upgradeInfo, "upgradeInfoText");
        this.upgradeCostText = this.createElement("div", "Costs: " + this.amountCost.toString(), "upgradeCostText");

        this.buyButton = new Button("Buy", () => this.buyUpgrade());
        this.buyButton.buttonVar.classList.add("upgradeBuyButton");

        this.setupHover();

        this.infoBox.append(this.upgradeInfoText, this.upgradeCostText, this.buyButton.buttonVar);
        this.upgradeContainer.append(this.upgradeNameText, this.infoBox);
    }

    setupHover() {
        this.upgradeContainer.addEventListener("mouseenter", () => {
            if (Upgrade.currentlyOpenInfobox != null && Upgrade.currentlyOpenInfobox != this.infoBox) {
                Upgrade.currentlyOpenInfobox.style.display = "none";
            }

            Upgrade.currentlyOpenInfobox = this.infoBox;

            clearTimeout(this.closeInfoboxTimeout);
            this.infoBox.style.display = "flex";
        });

        this.upgradeContainer.addEventListener("mouseleave", () => {
            this.closeInfoboxTimeout = setTimeout(() => {
                this.infoBox.style.display = "none";
            }, 100);
        });

    }

    displayUpgrade(upgradeGroup) {
        upgradeGroup.appendChild(this.upgradeContainer);
    }

    hideUpgrade() {
        this.upgradeContainer.remove();
    }

    buyUpgrade() {
        if (this.currencyCost.getAmount() >= this.amountCost) {
            this.currencyCost.subAmount(this.amountCost);
            this.currentLevel += 1;
            this.amountCost *= this.upgradeCostMult;
            this.amountCost = parseFloat(this.amountCost.toFixed(2));
            this.updateCostText();
            this.effect();
            if (this.currentLevel >= this.maxLevel) {
                this.hideUpgrade();
            }
        }
    }

    updateCostText() {
        this.upgradeCostText.textContent = "Costs: " + this.amountCost.toString();
    }
}