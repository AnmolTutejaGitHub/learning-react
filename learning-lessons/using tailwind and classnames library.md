if want to make button of different styles 
button component 


styling our button if it is primary or secondary 
Button.js
```
// https://www.npmjs.com/package/prop-types 
// js library for prop validation //so that both primary and secondary can't be true at same time
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
    rounded
}) {


    // // this would be really handy : 
    // let baseClassName = 'className="px-3 py-1.5 border';
    // if (primary) {
    //     baseClassName += 'bg-blue-500 border-blue-600 text-white'
    // }

    // // can use a js library classnames


    // px-3 py-1.5 border --> are default
    const classes = classnames('px-3 py-1.5 border',
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
    return <button className={classes}>{children}</button>;
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
```

App.js
```
import Button from "./Button";

function App() {
    return (
        <div>
            <div>
                {/* success={true} same as success */}
                <Button success>Click Here</Button>
            </div>

            <div>
                <Button warning>Buy now !</Button>
            </div>

            <div>
                <Button danger rounded>Deals!</Button>
            </div>

            <div>
                <Button secondary rounded>offers!</Button>
            </div>

            <div>
                <Button primary outline>Heil People!</Button>
            </div>

        </div>
    );
}

export default App;
```

