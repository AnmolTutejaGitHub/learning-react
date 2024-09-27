// basic structure of context

// context.js

import { createContext, useState } from "react";

// Creating the context
const contextName = createContext();

function Provider({ children }) {
    // will have states/functions u want to share
    const [state1, setState1] = useState(initialState);
    const someFunction = () => {
        // Your logic here
    };

    return (
        <contextName.Provider value={{ state1, setState1, someFunction }}>
            {children}
        </contextName.Provider>
    );
}

export { Provider };
export default contextName;


// index.js 

// import { Provider } from './Context/navigation';
root.render(
    //provider --> exporting our context 
    // App can use our context
    <Provider>
        <App />
    </Provider>
);



// using context
// import { createContext } from "react";
// import { Provider } from './Context/navigation';

const { state1 } = createContext(contextName);