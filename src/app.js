import 'core-js/es6/map';
import 'core-js/es6/set';

import 'bootstrap';
import "./styles/styles.scss";


// import {addition, minus} from "./testImportScript";
// console.log(addition(2,3)); 
// console.log(minus(2,3));


import React from "react";
import ReactDOM from "react-dom";

var customElement = React.createElement("h1", null, "Hello World");

var anotherCustomElement = <h1>Hello world 2</h1>;
ReactDOM.render(anotherCustomElement, document.getElementById("app"));