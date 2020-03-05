import React, { useState } from 'react';
import './App.css';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';


// function to add ingredient from ingredient list (from ingredients) to burger pane (to burger stack [to choseningredients])
// this function should maybe should create a div for each ingredient? or rather that would be iterated further down

function App() {
  let ingredients = [
    {name: 'Kaiser Bun', color: 'saddlebrown'},
    {name: 'Sesame Bun', color: 'sandybrown'},
    {name: 'Gluten Free Bun', color: 'peru'},
    {name: 'Lettuce Wrap', color: 'olivedrab'},
    {name: 'Beef Patty', color: '#3F250B'},
    {name: 'Soy Patty', color: '#3F250B'},
    {name: 'Black Bean Patty', color: '#3F250B'},
    {name: 'Chicken Patty', color: 'burlywood'},
    {name: 'Lettuce', color: 'lawngreen'},
    {name: 'Tomato', color: 'tomato'},
    {name: 'Bacon', color: 'maroon'},
    {name: 'Onion', color: 'lightyellow'}
  ];

  const [chosenIngredients, setIngredients] = useState([]);

  const addIngredient = (index, ingredient) => {
    setIngredients([...chosenIngredients, ingredient])
  }

  const clearBurgFun = () => {
    setIngredients([])
  }

  return (
    <div className="fullApp App">
      <div className="leftPanel">
        <IngredientList ingredients={ingredients} addIngredient={addIngredient} />
      </div>
      <div className="rightPanel">
        <BurgerPane chosenIngredients={chosenIngredients} clearBurgFun={clearBurgFun} />
      </div>
    </div>
  );
}

export default App;
