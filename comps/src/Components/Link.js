import classNames from 'classnames';
// import { useContext } from "react";
// import NavigationContext from "../Context/navigation";
import useNavigation from '../hooks/use-navigation';

function Link({ to, children, className }) {
    //const { navigate } = useContext(NavigationContext);
    const { navigate } = useNavigation();

    const classes = classNames('text-blue-500', className);


    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) return; //command(meta) for mac and ctrl for windowns is pressed while link is clicked it will open in new tab

        event.preventDefault();
        navigate(to);
    };

    return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}
export default Link;