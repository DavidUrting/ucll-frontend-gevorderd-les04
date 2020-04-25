import { weatherService } from "./weather";

weatherService.getWeatherForCurrentLocation(function (weer) {
    document.getElementById("modules-example").innerHTML = weer; 
});