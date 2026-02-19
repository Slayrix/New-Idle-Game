import Currency from "./Currency.js";
import Button from "./Button.js"

const currencyText = new Currency();
const button = new Button("Click", () => currencyText.addAmount(1));

currencyText.displayCurrency();
button.displayButton();