import React from "react";

const CakeAdder = ({ addCake, cakeCounter, cakesSold }) => {
  const handleClick = () => {
    if (cakeCounter >= 50) {
      addCake(4);
    } else if (cakeCounter >= 20) {
      addCake(3);
    } else if (cakeCounter >= 10) {
      addCake(2);
    } else {
      addCake(1);
    }
  };
  return (
    <div>
      <h2>Cupcake Count: {cakeCounter}</h2>
      <p>Inventory: {cakeCounter - cakesSold}</p>
      <button onClick={handleClick}>Make Cake!</button>
      {/* <div>
        {cakeCounter >= 25 && (
          <h4>Piping Bag aquired! Productivity increases</h4>
        )}
      </div> */}
      <div>
        {cakeCounter >= 100 && <h4>Mixer aquired! Productivity increases</h4>}
      </div>
      <div>
        {cakeCounter >= 150 && (
          <h4>Industrial Oven aquired! Productivity increases</h4>
        )}
      </div>
    </div>
  );
};

export default CakeAdder;
