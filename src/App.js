/*
 * @Author: miky 
 * @Date: 2019-03-11 22:15:07 
 * @Last Modified by: miky
 * @Last Modified time: 2019-03-13 00:45:42
 */

import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome-webpack';
import './style.css';
import './style.scss';

ReactDOM.render(
    <div>
        <i className="fa fa-address-book" aria-hidden="true"></i>
        <h1>Hello React</h1>
    </div>,
    document.getElementById('root')
)

if(hot.module) {
    module.hot.accept('App.js', () => {
        console.log('Accepting the updated printMe module!')
    })
}