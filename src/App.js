/*
 * @Author: miky 
 * @Date: 2019-03-11 22:15:07 
 * @Last Modified by: miky
 * @Last Modified time: 2019-03-18 23:19:06
 */

import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome-webpack';
import { AppContainer } from 'react-hot-loader';
import Greeter from './Greeter';
import './style.css';
import './style.scss';

const render = (App) => {
    ReactDOM.render(
        <AppContainer>
            <App/ >    
        </AppContainer>,
        document.getElementById('root')
    )
}

render(Greeter);

if(module.hot) {
    module.hot.accept('./Greeter', () => {
        render(require('./Greeter').default)
    })
}
