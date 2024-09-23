import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
    // will have vars we want to share using context amd function related to them
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    //whenever user clicks forward/backwards we need tov listen for popstate event
    useEffect(() => {

        // called whenever popstate changes
        const handler = () => {
            //just updating the url when user presses forward and backward
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener('popstate', handler);


        //cleanup function
        return () => {
            window.removeEventListener('popstate', handler);
        }
    }, []);

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    }




    return (<NavigationContext.Provider value={{ currentPath, navigate }}>
        {currentPath}
        {children}
    </NavigationContext.Provider>);
};
export { NavigationProvider };
export default NavigationContext;