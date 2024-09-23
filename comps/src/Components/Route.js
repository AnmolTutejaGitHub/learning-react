import { useContext } from "react";
import NavigationContext from "../Context/navigation";

function Route({ path, children }) {
    const { currentPath } = useContext(NavigationContext);

    if (path == currentPath) {
        return children;
    }

    return null;
}
export default Route;

// if current path === our path we return its children else we dont render that component