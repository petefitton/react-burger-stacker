import React from 'react';
import ChosenIngredients from './ChosenIngredients';


function BurgerStack(props) {
  return (
    <ChosenIngredients chosenIngredients={props.chosenIngredients} />
  );
}

export default BurgerStack;
