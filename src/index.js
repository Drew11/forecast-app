import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/RootComponent';
import { Provider } from 'react-redux';
import store from './reducers/rootReducer'
import { BrowserRouter as Router} from "react-router-dom";

store.subscribe(()=>console.log(store.getState()));
ReactDOM.render(
    <Provider store={store}>
        <Router basename={'/forecast-app/'}>
            <App />
        </Router>
    </Provider>
    ,
document.getElementById('root')
);

