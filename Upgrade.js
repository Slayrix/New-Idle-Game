import Button from "./Button.js";

export default class Upgrade {
    constructor(upgradeCurrencyCost, upgradeAmountCost, upgradeEffect, upgradeMaxLevel, upgradeName, upgradeInfo) {
        this.currencyCost = upgradeCurrencyCost;
        this.amountCost = upgradeAmountCost;
        this.effect = upgradeEffect;
        this.currentLevel = 0;
        this.maxLevel = upgradeMaxLevel;
        this.createUpgradeContainer(upgradeName, upgradeInfo);
    }

    createUpgradeContainer(upgradeName, upgradeInfo) {
        this.upgradeContainer = document.createElement("div");
        this.upgradeNameText = document.createElement("div");
        this.infoBox = document.createElement('div');
        this.upgradeInfoText = document.createElement("div");
        this.upgradeCostText = document.createElement("div");
        this.buyButton = new Button("Buy", () => this.buyUpgrade());

        this.upgradeContainer.appendChild(this.upgradeNameText);
        this.infoBox.appendChild(this.upgradeInfoText);
        this.infoBox.appendChild(this.upgradeCostText);
        this.infoBox.appendChild(this.buyButton.buttonVar);
        this.upgradeContainer.appendChild(this.infoBox);

        this.upgradeNameText.textContent = upgradeName;
        this.upgradeInfoText.textContent = upgradeInfo;
        this.upgradeCostText.textContent = "Costs: " + this.amountCost.toString();

        this.upgradeContainer.style.display = "inline-flex";
        this.upgradeContainer.style.flexDirection = "column";
        this.upgradeContainer.style.alignItems = "center";
        this.upgradeContainer.style.cursor = "default";
        this.upgradeContainer.style.position = "relative";
        this.upgradeContainer.style.marginRight = "4px";

        this.upgradeNameText.style.backgroundColor = "#cfcfcf";
        this.upgradeNameText.style.outline = "1px solid #000000";
        this.upgradeNameText.style.padding = "2px";
        this.upgradeNameText.style.marginBottom = "5px";

        this.infoBox.style.display = "inline-flex";
        this.infoBox.style.flexDirection = "column";
        this.infoBox.style.alignItems = "center";
        this.infoBox.style.backgroundColor = "#cfcfcf";
        this.infoBox.style.outline = "1px solid #000000";
        this.infoBox.style.padding = "2px";
        this.infoBox.style.position = "absolute";
        this.infoBox.style.top = "100%"
        this.infoBox.style.minWidth = "100%";
        this.infoBox.style.width = "max-content";
        this.infoBox.style.maxWidth = "200px";
        this.infoBox.style.display = "none";

        this.upgradeInfoText.style.width = "100%";
        this.upgradeInfoText.style.textAlign = "center"

        this.upgradeCostText.style.width = "100%";
        this.upgradeCostText.style.textAlign = "center";

        this.buyButton.buttonVar.style.width = "100%";
        this.buyButton.buttonVar.style.textAlign = "center";

        this.upgradeNameText.addEventListener("click", (e) => {
            this.infoBox.style.display = "block";

            const hideInfo = (event) => {
                if (!this.upgradeContainer.contains(event.target)) {
                    this.infoBox.style.display = "none";
                    document.removeEventListener("click", hideInfo);
                }
            }
            document.addEventListener("click", hideInfo);
        })
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
            this.effect();
            if (this.currentLevel >= this.maxLevel) {
                this.hideUpgrade();
            }
        }
    }
}