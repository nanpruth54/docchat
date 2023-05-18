import React from 'react';
//import React which helps js to import react library and to code in JSX(javascript xml) every function returns jsx component tells what should be render on the page
//rendering to webpage is done with the help of react-dom 

import ReactDom from 'react-dom';
//Reactdom is the package in the react library which provides API which helps to render all the components thats created by the React to DOM
//DOM -> DOCUMENT OBJECT MODEL its the programming interface for web development 
//it represents the page so that the programs can change the structure,style and content.
//dom is node or objects which can interact with the page.

import App from './App';

ReactDom.render(<App/>,document.getElementById('root'));
//reactdom helps to render the app component to the dom -> root 
//reactdom.render is a method which mainly takes two arguments first-> component which you want to render second -> dom 