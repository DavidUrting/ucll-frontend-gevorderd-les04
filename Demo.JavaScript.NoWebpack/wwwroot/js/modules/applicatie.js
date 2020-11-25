import { weatherService } from "./weather.js";

weatherService.getWeatherForCurrentLocation(function (weer) {
    document.getElementById("modules-example").innerHTML = weer; 
});