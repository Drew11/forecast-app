import React from 'react';
import {connect} from 'react-redux';

const LastQuery = ({historyCities, click, currentDayWeather})=> {
    console.log(currentDayWeather)

    return (
        <div className={"lastFiveQuery"}>
         <h4>last 5 query cities...</h4>
             <ul>
                {historyCities.length>0?
                     historyCities.map((city, index)=>
                     <li
                        key={index}
                        onClick={()=>click(city)}
                        className={currentDayWeather.location['name']===city? 'active': ''}
                      >
                       {city}
                     </li>)
                :null}
              </ul>
        </div>
    )
};

const mapState = (state)=>({
    historyCities: state.historyCities,
    currentDayWeather: state.currentDayWeather
});

export default connect(mapState)(LastQuery);