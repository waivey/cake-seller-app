import React from "react";

class PerkAdder extends React.Component {
  state = {
    perks: ["Piping Bag", "KitchenAid", "Industrial Oven"]
  };

  handleClick = () => {};

  render() {
    return (
      <>
        {this.props.revenue > 10 && (
          <div>
            <h4>Piping Bag: £5</h4>
            <button onClick={handleClick}>Buy</button>
          </div>
        )}
      </>
    );
  }
}

export default PerkAdder;
