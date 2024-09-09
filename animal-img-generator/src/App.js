import { useState } from 'react';
import AnimalShow from './AnimalShow';
import './App.css'

function genRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  //const [count, setCount] = useState(0);

  const [animals, setAnimals] = useState([]);

  //Don't directly change the count variable 
  // don;t dp count = 123;
  // do setCount(123);
  const handleClick = () => {
    //console.log("button was clicked")
    //setCount(count + 1); // sign to rect we want to change state so react will render this componenet again

    //animals.push( genRandomAnimal()]) // modifies original state
    setAnimals([...animals, genRandomAnimal()]);
  };

  const renderAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />
  }); // array of AnimalShow components

  // const newArr = array.map(function(currElement,indx,array){
  // map to this logic
  // retrun for each element x
  //})

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderAnimals}</div>
      {/* renders AnimalShow as child divs */}


    </div>
  );
}

export default App;


// note :
// to append child u just store curr children in array, map it to the child component and <div>cgild component array</div> that array inside parent div ??