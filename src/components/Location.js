import React from 'react';
import {connect} from 'react-redux';

const Location = ({currentDayWeather}) => {
    const location = currentDayWeather['location'];

    return (
        <ul>
            <li>Country: {location['country']}</li>
            <li>City: {location['name']}</li>
            <li>Localtime: {location['localtime']}</li>
        </ul>
    )
};

const mapState = (state) => ({
    currentDayWeather: state.currentDayWeather
});

export default connect(mapState)(Location);