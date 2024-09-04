// 5 steps to create a react app

// 1) Import the react and reactDOM libraries 
import React from 'react'; // defines what a component is and how mltiple components work togeter
import ReactDOM from 'react-dom/client'; //Library that knows how to get a component to show up in the browser

import App, { msg } from './App'; //App is component './App' is file ofcourse

// 2) Get a reference to the div with ID root
const element = document.getElementById('root');

//3)Tell react to take control of that element(doing it using reactDOM library)
const root = ReactDOM.createRoot(element);

//5) Show the component on the screen
root.render(<App />);


// resources : https://jsx-notes.vercel.app/