(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(48)},40:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(15),i=a.n(c),s=(a(39),a(40),a(12)),o=a.n(s),u=a(17),l=a(11),h=a(24),f=a(25),m=a(32),p=a(26),y=a(33),d=a(3),C=Object(d.b)(function(e){return{currentCityWeather:e.weather.current}})(function(e){var t=e.currentCityWeather;return n.a.createElement("ul",null,n.a.createElement("li",{className:"temp_c"},"Temperature: ","".concat(t.temp_c," \u2103")),n.a.createElement("li",{className:"temp_c"},"Precip: ","".concat(t.precip_mm," mm")),n.a.createElement("li",{className:"temp_c"},"Wind: ","".concat(t.wind_mph," mph")),n.a.createElement("li",{className:"temp_c"},"Pressure: ","".concat(t.pressure_in," in")),n.a.createElement("li",{className:"temp_c"},"Humidity: ","".concat(t.humidity)))}),v=Object(d.b)(function(e){return{currentCityLocation:e.weather.location}})(function(e){var t=e.currentCityLocation;return n.a.createElement("ul",null,n.a.createElement("li",null,"Country: ",t.country),n.a.createElement("li",null,"City: ",t.name),n.a.createElement("li",null,"Localtime: ",t.localtime))}),E=a(10),b=a(9),w=Object(d.b)(function(e){return{forecastWeather:e.forecastWeather}})(function(e){var t=e.forecastWeather;console.log(t);var a=t.forecast.forecastday;return n.a.createElement("div",{className:"forecast"},n.a.createElement(E.b,{to:"./"},"Back Home"),a.map(function(e){return n.a.createElement("li",null,e.date+":  "+e.day.maxtemp_c)}),n.a.createElement(b.a,{path:"./",component:x}))});var W={type:"setForecastWeather"},j=Object(d.b)(function(e){return{currentCityWeather:e.weather,forecastWeather:e.forecastWeather}},function(e){return{setForecastWeather1:function(){return e(W)}}})(function(e){var t=e.currentCityWeather,a=e.forecastWeather,r=e.setForecastWeather1,c=function(){var e=Object(u.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=t.location.name,fetch("https://api.apixu.com/v1/forecast.json?key=40d72c138d8f408382d145239191207&q=".concat(n,"&days=5")).then(function(e){return e.json()});case 2:W.forecastWeather=e.sent,console.log(W.forecastWeather),r(a.forecastWeather);case 5:case"end":return e.stop()}var n},e)}));return function(){return e.apply(this,arguments)}}();return t.current?n.a.createElement(E.a,null,n.a.createElement("div",{className:"rendered__weather-detail"},n.a.createElement(C,null),n.a.createElement(v,null),n.a.createElement(E.b,{to:"/forecast_weather",onClick:c},"Weather on week"),a.forecast?n.a.createElement(b.a,{path:"/forecast_weather",component:w}):null)):null}),O=Object(d.b)(function(e){return{fiveLastSearchCity:e.fiveLastSearchCity}})(function(e){var t=e.fiveLastSearchCity,a=e.click;return n.a.createElement("div",{className:"lastFiveQuery"},n.a.createElement("h4",null,"last 5 query cities..."),t.length>0?t.map(function(e){return n.a.createElement("li",{onClick:function(){return a(e)}},e)}):null)}),k=a(50),_=(a(47),{type:"setWeather"}),S={type:"addCity"},L=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).selectCityHistory=function(t){e.setState(function(e){return Object(l.a)({},e,{searchCity:t})})},e.confirmSearchCity=function(t){if(13===t.which){var a=t.target.value;e.setState(function(e){return Object(l.a)({},e,{searchCity:a})})}},e.state={searchCity:""},e}return Object(y.a)(t,e),Object(f.a)(t,[{key:"componentDidUpdate",value:function(){var e=Object(u.a)(o.a.mark(function e(t,a){var r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.searchCity===this.state.searchCity){e.next=6;break}return e.next=3,n=this.state.searchCity,fetch("https://api.apixu.com/v1/current.json?key=40d72c138d8f408382d145239191207&q=".concat(n)).then(function(e){return e.json()});case 3:r=e.sent,_.weather=r,this.props.setWeather(r);case 6:t.weather.location!==this.props.weather.location&&this.props.weather.location&&this.props.weather.location.name&&(S.searchCity=this.props.weather.location.name,this.props.addCity(S.searchCity));case 7:case"end":return e.stop()}var n},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement(E.a,null,n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h1",null,"Forecast App"),n.a.createElement(k.a,{type:"text",onChange:this.confirmSearchCity,onKeyPress:this.confirmSearchCity})),n.a.createElement(j,null),n.a.createElement(O,{click:this.selectCityHistory})))}}]),t}(r.Component),x=Object(d.b)(function(e){return{weather:e.weather,forecastWeather:e.forecastWeather,fiveLastSearchCity:e.fiveLastSearchCity}},function(e){return{setWeather:function(){return e(_)},addCity:function(){return e(S)}}})(L),N=a(31),g=a(18);var F=Object(g.b)(function(e,t){switch(t.type){case"setWeather":return Object(l.a)({},e,{weather:t.weather});case"setForecastWeather":return console.log(t.forecastWeather),Object(l.a)({},e,{forecastWeather:t.forecastWeather});case"addCity":var a=Object(N.a)(e.fiveLastSearchCity);return a.includes(t.searchCity)||a.push(t.searchCity),a.length>5&&a.shift(),Object(l.a)({},e,{fiveLastSearchCity:a});default:return e}},{weather:{},forecastWeather:{},fiveLastSearchCity:[]});i.a.render(n.a.createElement(d.a,{store:F},n.a.createElement(x,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.88c51cdb.chunk.js.map