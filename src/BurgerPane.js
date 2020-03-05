import React from 'react';
import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger';

function BurgerPane(props) {
  return (
    <div>
      <BurgerStack chosenIngredients={props.chosenIngredients} />
      <div>Burger Stacking Area</div>
      <ClearBurger clearBurgFun={props.clearBurgFun} />
    </div>
  );
}

export default BurgerPane;
