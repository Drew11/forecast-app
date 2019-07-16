import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'
import { BrowserRouter as Router} from "react-router-dom";


ReactDOM.render(
    <Provider store={store}>
        <Router basename={"/forecast-app"}>
            <App />
        </Router>
    </Provider>
    ,
document.getElementById('root')
);

