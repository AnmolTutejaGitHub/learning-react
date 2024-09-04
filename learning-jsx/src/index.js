// 5 steps to create a react app

// 1) Import the react and reactDOM libraries 
import React from 'react'; // defines what a component is and how mltiple components work togeter
import ReactDOM from 'react-dom/client'; //Library that knows how to get a component to show up in the browser

// 2) Get a reference to the div with ID root
const element = document.getElementById('root');

//3)Tell react to take control of that element(doing it using reactDOM library)
const root = ReactDOM.createRoot(element);

//4) create a component 
// component -> a function that returns some jsx
// jsx -> JavaScript xml
function App() {
  return <h1>Hello World!</h1>
}

//5) Show the component on the screen
root.render(<App />);

