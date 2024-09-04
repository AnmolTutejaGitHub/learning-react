//4) create a component 
// component -> a function that returns some jsx
// jsx -> JavaScript xml

let msg = "hey";
function App() {
    <h4>Hey</h4> //this will not be displayed to displat we have to return that jsx

    let message = "Hello there";
    if (Math.random() > 0.5) {
        message = "Bye";
    }
    const sum = 911;


    const type = "number";
    const minVal = 5;

    return (
        <div>
            <h1>{message} !</h1>
            <p>{sum}</p>

            {/* In JSX, which is used in React, attributes are written using camelCase, whereas in HTML, attributes are written in lowercase.  */}

            {/* 3.	Self-closing Tags:
      •	In HTML, the self-closing tag syntax is optional, and you can omit the trailing slash (/>).
      •	In JSX, self-closing tags must include the trailing slash (/>). */}

            {/* In JSX, attributes that represent values need to be treated as JavaScript expressions. This is why numeric values and other JavaScript types are wrapped in curly braces {} rather than being written as strings. */}
            {/* In plain HTML, attribute values like min and max are always strings, so you use quotes around them. For instance, min="5" and max="5" are string values in HTML. */}

            {/* html attributes are called props (propertie here) */}


            <input type="number" min={5} max={10} />

            {/* difference between html attribute and jsx props
        1) props can refer to a variable using curly braces syntax */}
            {/* In JSX (JavaScript XML), which is used with React, inline styles are applied differently compared to traditional HTML. Instead of using a CSS string, styles are passed as an object. This is because JSX is closer to JavaScript and allows for dynamic styling based on component state or props. Here’s why you pass styles as an object in JSX:
  
  1.	JavaScript Object Syntax: JSX allows you to use JavaScript expressions directly within the markup. Styles are passed as an object to leverage JavaScript’s object syntax, making it possible to use variables, functions, and conditional logic.
  2.	Dynamic Styles: Using an object for styles allows you to create dynamic styling. You can use JavaScript to conditionally apply styles based on component state or props. For example: */}
            <input type={type} min={minVal} style={{ color: 'red', border: '3px solid black' }} list={[1, 2, 3]} alt={message} />

            {/* rules for converting html to jsx
        1) In JSX, all prop names follow CamelCase */}
            <input maxLength="5" />
            {/* 2))Attributes meant to be numbers should be provided as number in curly braces */}
            {/* 3) In JSX, boolean 'true' can be written with just the property name . 'False' should be written with curly braces */}

            <input spellCheck />
            <input spellCheck='false' />

            {/* 4) IN JSX the 'class' Attribute is written as 'className' */}
            <input className="item" />

            {/* 5) In JSX, inline styles are provided as objects */}
            <input style={{ color: 'red', border: '3px solid black', textDecoration: 'none', paddingTop: "20px" }} />

        </div>
    );
    //return <h1>Hello World!</h1>
}

export default App;
export { msg }; //named export