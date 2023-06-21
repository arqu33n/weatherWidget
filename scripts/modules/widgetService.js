import { fetchWeather } from "./APIservice.js";
import {
  renderWidgetForecast,
  renderWidgetOther,
  renderWidgetToday,
} from "./render.js";

export const startWidget = async () => {
  const widget = document.createElement("div");
  widget.classList.add("widget");

  const dataWeather = await fetchWeather("Казань");

  if (dataWeather.success) {
    renderWidgetToday(widget, dataWeather.data);
    renderWidgetOther(widget, dataWeather.data);
  } else {
    showError();
  }

  renderWidgetForecast(widget);

  return widget;
};
