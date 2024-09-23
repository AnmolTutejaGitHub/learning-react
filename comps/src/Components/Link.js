import { useContext } from "react";
import NavigationContext from "../Context/navigation";

function Link({ to, children }) {
    const { navigate } = useContext(NavigationContext);
    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) return; //command(meta) for mac and ctrl for windowns is pressed while link is clicked it will open in new tab

        event.preventDefault();
        navigate(to);
    };

    return <a href={to} onClick={handleClick}>{children}</a>
}
export default Link;