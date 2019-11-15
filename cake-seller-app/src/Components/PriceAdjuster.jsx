import React from "react";

const PriceAdjuster = ({ adjustPrice, price }) => {
  const handleClick = event => {
    if (event.target.name === "lower") {
      adjustPrice(-0.5);
    } else {
      adjustPrice(0.5);
    }
  };
  return (
    <div>
      <h5>Price per cupcake: £{price}</h5>
      <button onClick={handleClick} name="lower">
        lower
      </button>
      <button onClick={handleClick} name="raise">
        raise
      </button>
    </div>
  );
};

export default PriceAdjuster;
