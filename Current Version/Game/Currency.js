export default class Currency {
    constructor() {
        this.textVar = document.createElement("p");
        this.currencyAmount = 0;
        this.setTextContentToCurrencyAmount();
    }

    setTextContentToCurrencyAmount() {
        this.textVar.textContent = this.currencyAmount.toString();
    }

    addAmount(amount) {
        this.currencyAmount += amount;
        this.setTextContentToCurrencyAmount();
    }

    displayCurrency() {
        document.body.appendChild(this.textVar);
    }
}