import { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSubmit }) {

    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault(); //preventing adding to url onSubmit from stuff thus prevent reload of page
        //console.log('getting the term');
        //whenever user click on button onSubmit is called
        onSubmit(term);
        // as onsubmit is definedc in parent component so this parameter will be used 
    }

    //this handles what user enters in input field
    const handleChange = (event) => {
        //console.log(event);
        //event.target.value //reads value on which event is called
        setTerm(event.target.value);
    }


    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Enter Search Term</label>
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    );
}

export default SearchBar;

//when the button in the Child component is clicked, it triggers handleClick, which in turn calls the onSubmit function passed from the Parent

