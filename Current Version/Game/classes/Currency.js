import {helperFunctions} from "../helperFunctions.js";

export default class Currency {
    constructor(currencyName, displayMenu) {
        this.textVar = helperFunctions.createElement("div", null, "currency")
        this.currencyName = currencyName;
        this.currencyAmount = 0;
        this.gainPerSecond = 0;
        this.setTextContentToCurrencyAmount();
        displayMenu.appendElementToContainer(this.textVar);
    }

    setTextContentToCurrencyAmount() {
        this.textVar.textContent = this.currencyName + ": " + this.currencyAmount.toString();
    }

    addAmount(amount) {
        this.currencyAmount += amount;
        this.currencyAmount = parseFloat(this.currencyAmount.toFixed(2));
        this.setTextContentToCurrencyAmount();
    }

    subAmount(amount) {
        this.currencyAmount -= amount;
        this.currencyAmount = parseFloat(this.currencyAmount.toFixed(2));
        this.setTextContentToCurrencyAmount();
    }

    getAmount() {
        return this.currencyAmount;
    }

    addAmountToGainPerSecond(amount) {
        this.gainPerSecond += amount;
    }

    genCurrency() {
        this.currencyAmount += this.gainPerSecond;
        this.currencyAmount = parseFloat(this.currencyAmount.toFixed(2));
        this.setTextContentToCurrencyAmount();
    }

    displayCurrency() {
        document.body.appendChild(this.textVar);
    }
}