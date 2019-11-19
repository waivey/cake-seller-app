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
    <div className="cakeAdder">
      <h2>Cupcake Count: {cakeCounter}</h2>
      {cakeCounter - cakesSold <= 5 && cakesSold > 5 ? (
        <p className="panic">Inventory: {cakeCounter - cakesSold}</p>
      ) : (
        <p>Inventory: {cakeCounter - cakesSold}</p>
      )}

      <button onClick={handleClick}>Make Cake!</button>
    </div>
  );
};

export default CakeAdder;
