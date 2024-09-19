import { createContext, useState } from 'react';

const BooksContext = createContext();

function Provider({ children }) { //If want to share dynamic values
    const [count, setCount] = useState(0);

    const valueToShare = {
        count: count,
        incrementCount: () => {
            setCount(count + 1);
        }
    }

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
}

export { Provider }; //named export 
export default BooksContext;