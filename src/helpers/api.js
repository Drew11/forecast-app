const apiKey = 'key=40d72c138d8f408382d145239191207';

function getCurrentDayData(query) {
 return fetch(`https://api.apixu.com/v1/current.json?${apiKey}&q=${query}`)
        .then(response=>response.json());
}

function getForecastData(query) {
    return fetch(`https://api.apixu.com/v1/forecast.json?${apiKey}&q=${query}&days=5`)
        .then(response => response.json());
}

export {
    getCurrentDayData,
    getForecastData,
}