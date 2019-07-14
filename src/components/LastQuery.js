import React from 'react';
import {connect} from 'react-redux';

const LastQuery = ({fiveLastSearchCity, click})=> {

    return (
        <div className={"lastFiveQuery"}>
            <h4>last 5 query cities...</h4>
            {fiveLastSearchCity.length>0?
                fiveLastSearchCity.map(city=>
                    <li
                        onClick={()=>click(city)}
                    >
                       {city}
                    </li>)
                :null}
        </div>
    )
};

const mapState = (state)=>({
    fiveLastSearchCity: state.fiveLastSearchCity
});

export default connect(mapState)(LastQuery);