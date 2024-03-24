import { App } from "./app.ts";
import "./styles.css";

const appRoot = document.querySelector<HTMLDivElement>("#app");

const app = new App();

if (appRoot) app.render(appRoot);
