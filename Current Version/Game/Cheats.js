import * as helperFunctions from "./helperFunctions.js"
import Button from "./Button.js";

export default class Cheats {
    constructor() {
        this.createCheatbox();
        this.displayCheats();
    }
    createCheatbox() {
        this.cheatboxContainer = helperFunctions.createElement("div", null, "cheatboxContainer");
        this.cheatButton = new Button("Cheat Energy", () => cheat());
        this.cheatButton.buttonVar.classList.add("cheatButton")

        this.cheatTextbox = helperFunctions.createElement("input", null, "cheatTextbox");

        this.cheatboxContainer.append(this.cheatButton.buttonVar);
        this.cheatboxContainer.append(this.cheatTextbox);
    }

    displayCheats() {
        document.body.appendChild(this.cheatboxContainer);
    }
}