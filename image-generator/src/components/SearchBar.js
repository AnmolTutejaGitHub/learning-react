import { useState } from 'react';
function SearchBar({ onSubmit }) {

    const [term, setTerm] = useState('');

    const handleClick = () => {
        //whenever user click on button onSubmit is called
        onSubmit('cars');
    }

    const handleFormSubmit = (event) => {
        event.preventDefault(); //preventing adding to url onSubmit from stuff thus prevent reload of page
        //console.log('getting the term');
    }

    //this handles what user enters in input field
    const handleChange = (event) => {
        console.log(event);
        //event.target.value //reads value on which event is called
        setTerm(event.target.value);
    }


    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input value={term} onChange={handleChange} />
            </form>

            <button onClick={handleClick}>enter</button>
        </div>
    );
}

export default SearchBar;

//when the button in the Child component is clicked, it triggers handleClick, which in turn calls the onSubmit function passed from the Parent