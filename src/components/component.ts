export class Component {
  view: HTMLElement;

  constructor(tagName: keyof HTMLElementTagNameMap = "div") {
    this.view = document.createElement(tagName);
  }

  render(parent: Node) {
    parent.appendChild(this.view);
  }
}
