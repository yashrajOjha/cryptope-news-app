import React from "react";
import ReactDom from "react-dom";
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom';
import 'antd/dist/antd.css';
import { Provider } from "react-redux";
import store from './app/store';
ReactDom.render(
<Router>
    <Provider store={store}>
        {/* every single compoenent will have access to the store variable  */}
        <App/>
    </Provider>
</Router>,document.getElementById('root'));