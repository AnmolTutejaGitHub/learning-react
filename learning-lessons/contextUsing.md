```
// basic structure of context

// context.js

import { createContext, useState } from "react";

// Creating the context
const contextName = createContext();

function Provider({ children }) {
    // Define state or functions to share across components
    const [state1, setState1] = useState(initialState);

    // Any other state or functions you want to share
    const someFunction = () => {
        // Your logic here
    };

    return (
        <contextName.Provider value={{ state1, setState1, someFunction }}>
            {children} {/* Allow children components to be rendered */}
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
```