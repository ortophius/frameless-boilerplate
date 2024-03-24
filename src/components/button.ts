import { Component } from "./component";

export class Button extends Component {
  text: string;
  onClick?: () => void;

  constructor(text: string, onClick?: () => void) {
    super();
    this.text = text;
    this.onClick = onClick;
    const button = document.createElement("button");
    button.innerText = text;
    this.view.appendChild(button);

    if (this.onClick)
      this.view
        .querySelector("button")
        ?.addEventListener("click", this.onClick);
  }
}
