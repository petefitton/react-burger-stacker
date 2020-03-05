import React from 'react';
import Ingredients from './Ingredients';


function IngredientList(props) {
  return (
    <Ingredients ingredients={props.ingredients} addIngredient={props.addIngredient} />
  );
}

export default IngredientList;
