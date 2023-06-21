import { fetchWeather } from "./modules/APIservice.js";
import { startWidget } from "./modules/widgetService.js";
const initWidget = async (app) => {
  const widget = await startWidget();
  app.append(widget);
};
initWidget(document.querySelector("#app"));
