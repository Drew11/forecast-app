(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(48)},40:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(15),i=a.n(c),u=(a(39),a(40),a(11)),o=a.n(u),l=a(17),s=a(24),m=a(25),h=a(32),y=a(26),p=a(33),f=a(9),E=a(3),d=a(50),_=a(10),W=Object(E.b)(function(e){return{currentDayWeather:e.currentDayWeather}})(function(e){var t=e.currentDayWeather.current;return n.a.createElement("ul",null,n.a.createElement("li",{className:"temp_c"},"Temperature: ","".concat(t.temp_c," \u2103")),n.a.createElement("li",{className:"temp_c"},"Precip: ","".concat(t.precip_mm," mm")),n.a.createElement("li",{className:"temp_c"},"Wind: ","".concat(t.wind_mph," mph")),n.a.createElement("li",{className:"temp_c"},"Pressure: ","".concat(t.pressure_in," in")),n.a.createElement("li",{className:"temp_c"},"Humidity: ","".concat(t.humidity)))}),v=Object(E.b)(function(e){return{currentDayWeather:e.currentDayWeather}})(function(e){var t=e.currentDayWeather.location;return n.a.createElement("ul",null,n.a.createElement("li",null,"Country: ",t.country),n.a.createElement("li",null,"City: ",t.name),n.a.createElement("li",null,"Localtime: ",t.localtime))}),C=Object(E.b)(function(e){return{propsCity:e.city,historyCities:e.historyCities,currentDayWeather:e.currentDayWeather}},function(e){return{setCity:function(t){return e({type:"SET_CITY",city:t})}}})(function(e){var t=e.historyCities,a=e.currentDayWeather,r=e.setCity;return n.a.createElement("div",{className:"lastFiveQuery"},n.a.createElement("h4",null,"last 5 query cities..."),n.a.createElement("ul",null,t.length>0?t.map(function(e,t){return n.a.createElement("li",{key:t,onClick:function(){return r(e)},className:a.location.name===e?"active":""},e)}):null))}),b="key=40d72c138d8f408382d145239191207",D="https://api.apixu.com/v1/current.json?",T="https://api.apixu.com/v1/forecast.json?";var O=Object(E.b)(function(e){return{city:e.city,currentCityWeather:e.currentDayWeather,forecastWeather:e.forecastWeather}},function(e){return{setForecastWeather:function(t){return e({type:"SET_FORECAST_WEATHER",forecastWeather:t})}}})(function(e){var t=e.currentCityWeather,a=e.setForecastWeather,r=(e.forecastWeather,e.city);e.match;function c(){return(c=Object(l.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=r,fetch("".concat(T+b,"&q=").concat(n,"&days=5")).then(function(e){return e.json()});case 2:t=e.sent,a(t.forecast.forecastday);case 4:case"end":return e.stop()}var n},e)}))).apply(this,arguments)}return t.current?n.a.createElement("div",{className:"rendered__weather"},n.a.createElement("div",{className:"rendered__weather-detail"},n.a.createElement(v,null),n.a.createElement(W,null)),n.a.createElement(C,null),n.a.createElement(_.b,{className:"link__forecast",to:"/week",onClick:function(){return c.apply(this,arguments)}},"Weather on week")):null}),j=Object(E.b)(function(e){return{forecastWeather:e.forecastWeather}})(function(e){var t=e.forecastWeather;return n.a.createElement("div",{className:"forecast__weather"},n.a.createElement(_.b,{to:"/forecast-app"},"Back"),n.a.createElement("ul",{className:"forecast__weather-detail"},t.map(function(e,t){return n.a.createElement("li",{key:t},"".concat(e.date,": ").concat(e.day.condition.text),n.a.createElement("ul",null,n.a.createElement("li",null,"avgvis_km: ".concat(e.day.avgvis_km)),n.a.createElement("li",null,"avgtemp_c: ".concat(e.day.avgtemp_c)),n.a.createElement("li",null,"avgtemp_c: ".concat(e.day.avgtemp_c)),n.a.createElement("li",null,"avghumidity: ".concat(e.day.avghumidity))))})))}),w=(a(47),function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(n)))).confirmSearchCity=function(e){var t=a.props.setCity,r=e.target.value;13===e.which&&t(r)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(){var e=Object(l.a)(o.a.mark(function e(t){var a,r,n,c,i,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.props,r=a.city,n=a.currentDayWeather,c=a.setCurrentDayWeather,i=a.addCityToHistory,t.city===r){e.next=6;break}return e.next=4,o=r,fetch("".concat(D+b,"&q=").concat(o)).then(function(e){return e.json()});case 4:u=e.sent,c(u);case 6:t.currentDayWeather.location!==n.location&&n.location&&i(this.props.currentDayWeather.location.name);case 7:case"end":return e.stop()}var o},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h1",null,"Forecast App"),n.a.createElement(d.a,{type:"text",placeholder:"type city, on english please...",onChange:this.confirmSearchCity,onKeyPress:this.confirmSearchCity})),n.a.createElement("main",null,n.a.createElement(f.a,{exact:!0,path:"/forecast-app/",component:O}),n.a.createElement(f.a,{path:"/forecast-app/week",component:j})))}}]),t}(r.Component)),k=Object(E.b)(function(e){return{city:e.city,currentDayWeather:e.currentDayWeather,forecastWeather:e.forecastWeather}},function(e){return{setCity:function(t){return e({type:"SET_CITY",city:t})},setCurrentDayWeather:function(t){return e({type:"SET_CURRENT_DAY_WEATHER",currentDayWeather:t})},addCityToHistory:function(t){return e({type:"ADD_CITY_TO_HISTORY",cityName:t})}}})(w),N=a(31),g=a(13),A=a(18);var S=Object(A.b)(function(e,t){switch(t.type){case"SET_CITY":return Object(g.a)({},e,{city:t.city});case"SET_CURRENT_DAY_WEATHER":return Object(g.a)({},e,{currentDayWeather:t.currentDayWeather});case"SET_FORECAST_WEATHER":return Object(g.a)({},e,{forecastWeather:t.forecastWeather});case"ADD_CITY_TO_HISTORY":var a=Object(N.a)(e.historyCities);return a.includes(t.cityName)||a.push(t.cityName),a.length>5&&a.shift(),Object(g.a)({},e,{historyCities:a});default:return e}},{city:"",currentDayWeather:{},forecastWeather:[],historyCities:[]});i.a.render(n.a.createElement(E.a,{store:S},n.a.createElement(_.a,{basename:"/forecast-app"},n.a.createElement(k,null))),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.2ebf601b.chunk.js.map