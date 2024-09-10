instead of document.querySelector(input).value 
use react state 
create a state ,
handle an event onChange , handle is as : 
whenever input.value changes it assigns that value event.target.value to the useState
now can use our state wherever we want to use our input value

whenever input value changes our state changes and component rerenders 


```
    import React from 'react';
    import {useState} from 'react';


function App() {
    
    const [term,setTerm] = useState('');
    
    const handleChange = (event)=>{
        setTerm(event.target.value);
    }
    return (
        <div>
          <div>
            Enter some text
          </div>
          <form>
            <input onChange={handleChange} />
          </form>
          <h3>Your Text</h3>
          <p>
            {term}
          </p>
        </div>
    );
}

const useState = React.useState;
export default App;
```