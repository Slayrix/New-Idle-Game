const text = document.createElement("p");
const button = document.createElement("button");

text.textContent = "0";
button.textContent = "Click";

document.body.appendChild(text);
document.body.appendChild(button);

let currency = 0;

button.addEventListener("click", click);

function click() {
    currency++
    text.textContent = currency;
}