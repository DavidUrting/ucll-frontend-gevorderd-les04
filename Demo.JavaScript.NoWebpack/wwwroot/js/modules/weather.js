import * as http from './http.js';

// Haalt asynchroon de huidige locatie op (latitude, longitude). 
function getCurrentLocation(callback) {
    if ("geolocation" in navigator) {
        /* geolocation is available */
        navigator.geolocation.getCurrentPosition(function (position) {
            callback(position.coords.latitude, position.coords.longitude);
        });
    } else {
        /* geolocation IS NOT available */
        setTimeout(callback(null, null));
    }
}

class BaseWeather {
    getWeatherForCurrentLocation(callback) {
        return null;
    }
}

class OpenWeatherMap extends BaseWeather {
    static get apiKey() { return "e3c03bc457a2bca1463a28cfbf66b5a4"; } // Gelieve zelf een key aan te maken als je wil testen :)

    getWeatherForCurrentLocation(callback) {
        getCurrentLocation(function (lat, lon) {
            http.get("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=" + OpenWeatherMap.apiKey, function (response) {
                // Als de response een weather array heeft, dan is de call gelukt (of m.a.w. er kon een weerbericht bepaald worden)
                if (response && response.weather && response.weather[0]) {
                    callback(response.weather[0].description);
                }
                else {
                    callback("?");
                    console.warn(response);
                }
            });
        });
    }
}

export var weatherService = new OpenWeatherMap();
