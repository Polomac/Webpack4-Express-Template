// Module imports are available globaly
import _ from 'lodash'; 

// Importing component
import otherIndex from './components/firstComponent/otherindex.js';

// Importing global style
import './assets/style/style.scss';

// Create and import object containing images to be proccessed by webpack.config
var context = require.context("./assets/img", true, /\.png$/);
var obj = {};
context.keys().forEach(function (key) {
  obj[key] = context(key);
  return obj;
});

// Creating single component
const component = (() => {
  let element = document.createElement('div');

  element.innerHTML = '<h2> Hello Mick!</h2>';
  element.className = 'outer-div';
  element.appendChild(otherIndex.template());
  
  return element;
});

document.body.appendChild(component());