import React from 'react';

/* display list of chosen ingredients (iterate over that array) */
// it should have access to the ChosenIngredients array through props

function ChosenIngredients(props) {
  return (
    <div className="burgerPanel">
      {props.chosenIngredients.map((ingredient, i) => (
        <div style={{backgroundColor: ingredient.color}} backgroundColor="black" className="burgerIngredient" key={`ingredient-${i}`}>{ingredient.name}</div>
      ))}
    </div>
  );
}

export default ChosenIngredients;
