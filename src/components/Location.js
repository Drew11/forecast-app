import React from 'react';
import {connect} from 'react-redux';


const Location = ({currentCityLocation})=> {
    return (
            <ul>
                <li>Country: {currentCityLocation['country']}</li>
                <li>City: {currentCityLocation['name']}</li>
                <li>Localtime: {currentCityLocation['localtime']}</li>
            </ul>
    )
};

const mapState = (state)=>({
    currentCityLocation: state.weather.location
});

export default connect(mapState)(Location);