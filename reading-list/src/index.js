import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { Provider } from './Context/Books';

const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);

root.render(
    <Provider><App /></Provider>
);


// App component will be shared to our Provider as prop childern
// whatever inside <Provider> will share context