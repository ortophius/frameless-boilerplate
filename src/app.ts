import { Button } from "./components/button";
import { Component } from "./components/component";
import { List } from "./components/list";
import { Table } from "./components/table";

const items = ["item1", "item2"];

const tableRows: [string, string][] = [
  ["row title", "row value"],
  ["another title", "another value"],
  ["third title", "third value"],
];

export class App extends Component {
  state: "list" | "table" = "list";
  list: List;
  table: Table;
  toggleButton: Button;
  constructor() {
    super();
    this.list = new List(items);
    this.table = new Table(tableRows);
    this.view.classList.add("app");
    this.toggleButton = new Button("change page", this.toggleView.bind(this));
    this.updateView();
  }

  toggleView() {
    if (this.state === "list") this.state = "table";
    else this.state = "list";
    this.updateView();
  }

  updateView() {
    this.view.replaceChildren();
    if (this.state === "list") this.list.render(this.view);
    if (this.state === "table") this.table.render(this.view);

    this.toggleButton.render(this.view);
  }
}
