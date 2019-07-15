import React from 'react';
import {connect} from 'react-redux';
import {getCurrentDayData} from '../helpers/api'

const LastQueryCities = ({historyCities, currentDayWeather, setCity, propsCity})=> {

    return (
        <div className={"lastFiveQuery"}>
         <h4>last 5 query cities...</h4>
             <ul>
                {historyCities.length>0?
                     historyCities.map((city, index)=>
                     <li
                        key={index}
                        onClick={()=>setCity(city)}
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
    propsCity: state.city,
    historyCities: state.historyCities,
    currentDayWeather: state.currentDayWeather
});
const mapDispatchProps = (dispatch)=>{
    return {
        setCity:(city)=> dispatch({type: 'SET_CITY', city: city})
}};

export default connect(mapState, mapDispatchProps)(LastQueryCities);