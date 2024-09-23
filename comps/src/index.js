import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NavigationProvider } from './Context/navigation';

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(
    //provider --> exporting our context 
    // App can use our context
    <NavigationProvider>
        <App />
    </NavigationProvider>
); 