import React from 'react';

function ClearBurger(props) {
  return (
    <div>
      <button onClick={() => props.clearBurgFun()}>Clear</button>
    </div>
  );
}

export default ClearBurger;
