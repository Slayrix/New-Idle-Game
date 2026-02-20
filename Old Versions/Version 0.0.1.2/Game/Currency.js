export default class Currency {
    constructor(currencyText) {
        this.textVar = document.createElement("div");
        this.currencyText = currencyText;
        this.currencyAmount = 0;
        this.setTextContentToCurrencyAmount();
    }

    setTextContentToCurrencyAmount() {
        this.textVar.textContent = this.currencyText + this.currencyAmount.toString();
    }

    addAmount(amount) {
        this.currencyAmount += amount;
        this.setTextContentToCurrencyAmount();
    }

    subAmount(amount) {
        this.currencyAmount -= amount;
        this.setTextContentToCurrencyAmount();
    }

    getAmount() {
        return this.currencyAmount;
    }

    displayCurrency() {
        document.body.appendChild(this.textVar);
    }
}