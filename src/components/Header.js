import React from 'react';
import {Input} from 'reactstrap';
import {connect} from "react-redux";

const Header = ( {setCity} ) => {

    function confirmSearchCity (event) {
        const city = event.target.value;
        if (event.which === 13) {
            setCity(city);
        }
    }

    return (
        <header className="App-header">
            <h1>Forecast App</h1>
            <Input
                type="text"
                placeholder={"type city, on english please..."}
                onChange={confirmSearchCity}
                onKeyPress={confirmSearchCity}
            />
        </header>
    )
};

const mapDispatchProps = (dispatch) => {
    return {
        setCity: (city) => dispatch( {type: 'SET_CITY', city: city} ),
}};

export default connect(null, mapDispatchProps)(Header);