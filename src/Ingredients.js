import React from 'react';

/* list of ingredients iterated over array of Objects and processed
has access to ingredients through props.ingredients
each ingredient should have an add button as well */

function Ingredients(props) {
  return (
    <ul>
      {props.ingredients.map((ingredient, i) => (
        <li key={`ingredient-${i}`}>{ingredient.name}<button onClick={() => props.addIngredient(i, ingredient)}>></button></li>
      ))}
    </ul>
  );
}

export default Ingredients;
