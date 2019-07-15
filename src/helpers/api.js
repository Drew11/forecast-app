const apiKey = 'key=40d72c138d8f408382d145239191207';
const apiUrlCurrent = 'https://api.apixu.com/v1/current.json?';
const apiUrlForecast = 'https://api.apixu.com/v1/forecast.json?';


function getCurrentDayData(query) {
 return fetch(`${apiUrlCurrent+apiKey}&q=${query}`)
        .then(response=>response.json());
}

function getForecastData(query) {
    return fetch(`${apiUrlForecast+apiKey}&q=${query}&days=5`)
        .then(response => response.json());
}

export {
    getCurrentDayData,
    getForecastData,
}