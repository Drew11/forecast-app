export const Actions = {
    SET_CITY: 'SET_CITY',
    SET_CURRENT_DAY_WEATHER:'SET_CURRENT_DAY_WEATHER',
    SET_FORECAST_WEATHER:'SET_FORECAST_WEATHER',
    ADD_CITY_TO_HISTORY: 'ADD_CITY_TO_HISTORY',
    SWITCH_PATH: 'SWITCH_PATH'
};

export const weatherActions = {
    setCity: (city) => ({
        type: Actions.SET_CITY,
        city: city
    }),

    setCurrentDayWeather: (currentDayWeather) => ({
        type: Actions.SET_CURRENT_DAY_WEATHER,
        currentDayWeather: currentDayWeather
    }),

    setForecastWeather: (forecastWeather)=>({
        type: Actions.SET_FORECAST_WEATHER,
        forecastWeather: forecastWeather
    }),

    addCityToHistory: (cityName) =>({
        type: Actions.ADD_CITY_TO_HISTORY,
        cityName: cityName
    }),
    switchPath: (path)=> ({
        type: Actions.SWITCH_PATH, path: path
    })

};

