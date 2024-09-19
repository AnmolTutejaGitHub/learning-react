// https://www.npmjs.com/package/prop-types 
// js library for prop validation
import PropTypes from 'prop-types';
import classnames from 'classnames';

// const finalClassName = classnames( //key is included if only value is true
//     {
//         'bg-blue-500': true
//     }
// );


//classnmaes library : https://www.npmjs.com/package/classnames

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    onClick,
    ...rest //takes all the remaining properties and assign them to rest //this rest can have out event handler and can pass to our button element no need to maintain handleClick mourseover
}) {


    // // this would be really handy : 
    // let baseClassName = 'className="px-3 py-1.5 border';
    // if (primary) {
    //     baseClassName += 'bg-blue-500 border-blue-600 text-white'
    // }

    // // can use a js library classnames


    // px-3 py-1.5 border --> are default
    //rest.className --> any additional className passed by the developer 
    const classes = classnames(rest.className, 'flex items-center px-3 py-1.5 border',
        {
            'border-blue-500 bg-blue-500 text-white': primary === true,
            'border-gray-900 bg-gray-500 text-white': secondary === true,
            'border-green-500 bg-green-500 text-white': success === true,
            'border-yellow-400 bg-yellow-400 text-white': warning === true,
            'border-red-400 bg-red-400 text-white': danger === true,
            'rounded-full': rounded, //as when true 
            'bg-white': outline,
            'text-blue-500': outline && primary,
            'text-gray-900': outline && secondary
        }
    );
    return <button className={classes}
        //  onClick={onClick} 
        {...rest} //addititon props will be passed to button element 
    >{children}</button>;
}


Button.propTypes = {
    checkVariationValue: (
        //props 
        // we are destructuring props obj here 
        { primary, secondary, success, warning, danger }
    ) => {
        //console.log(props);
        //if that prop passed it will be undefined
        //Number(!!undefined) --> Number(false) --> 0 //JS 
        const count = Number(!!primary) + Number(!!secondary) + Number(!!warning) + Number(!!success) + Number(!!danger);

        if (count > 1) {
            return new Error('only one of primary ,secondary, success, warning , danger can be true');
        }
    }
};

export default Button;