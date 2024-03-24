import { Component } from "./component";

export class Table extends Component {
  rows: [string, string][];

  constructor(rows: [string, string][]) {
    super("table");
    this.rows = rows;
    this.view.appendChild(document.createElement("tbody"));
    this.renderRows();
  }

  renderRows() {
    this.view.innerHTML = this.rows
      .map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`)
      .join("");
  }
}
