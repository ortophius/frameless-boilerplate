import { Button } from "./button";
import { Component } from "./component";

export class List extends Component {
  items: string[];

  constructor(items: string[]) {
    super();
    this.items = items;

    this.view.classList.add("list");
    this.view.innerHTML = `
      <div class="buttons"></div>
      <div class="items"></div>
      `;

    this.renderItems();

    const plusButton = new Button("+", this.addItem.bind(this));
    const minusButton = new Button("-", this.removeItem.bind(this));

    const buttonsSection = this.view.querySelector(".buttons");

    if (buttonsSection) {
      minusButton.render(buttonsSection);
      plusButton.render(buttonsSection);
    }
  }

  renderItems() {
    const itemsSection = this.view.querySelector<HTMLElement>(".items");

    if (itemsSection) {
      itemsSection.innerText = this.items.join(" / ");
    }
  }

  addItem() {
    this.items.push(`item`);
    console.log(this.items);
    this.renderItems();
  }

  removeItem() {
    this.items.pop();
    console.log(this.items);
    this.renderItems();
  }
}
