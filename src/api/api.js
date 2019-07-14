export {
    getCurrentDayData,
    getForecastData,
};

function getCurrentDayData(query) {
 return fetch(`https://api.apixu.com/v1/current.json?key=40d72c138d8f408382d145239191207&q=${query}`)
        .then(response=>response.json());
}

function getForecastData(query) {
    return fetch(`https://api.apixu.com/v1/forecast.json?key=40d72c138d8f408382d145239191207&q=${query}&days=5`)
        .then(response=>response.json());
}