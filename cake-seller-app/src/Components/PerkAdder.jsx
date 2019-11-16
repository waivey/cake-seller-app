import React from "react";

class PerkAdder extends React.Component {
  state = {
    perks: {
      foodColouring: { name: "Food Colouring", price: 3, cost: 0.3 },
      sprinkles: { name: "Sprinkles", price: 2, cost: 0.2 },
      cherries: { name: "Cherries", price: 5, cost: 0.5 },
      cases: { name: "Cute Cases", price: 1.5, cost: 0.15 },
      stars: { name: "Star Sprinkles", price: 4, cost: 0.4 },
      rainbows: { name: "Rainbows", price: 11, cost: 1.1 },
      unicorns: { name: "Unicorns", price: 15, cost: 1.5 }
    }
  };
  handleClick = event => {
    const keys = Object.keys(this.state.perks);
    keys.forEach(key => {
      if (event.target.name === key) {
        this.props.adjustCost(this.state.perks[key].cost);
        this.props.purchasePerk(this.state.perks[key].price);
      }
    });
  };

  render() {
    return (
      <>
        {this.props.revenue > 4 && (
          <div>
            <h4>Sprinkles: £2</h4>
            <button onClick={this.handleClick} name="sprinkles">
              Buy
            </button>
          </div>
        )}
        {this.props.revenue > 12 && (
          <div>
            <h4>Food Colouring: £3</h4>
            <button onClick={this.handleClick} name="foodColouring">
              Buy
            </button>
          </div>
        )}
        {this.props.revenue > 22 && (
          <div>
            <h4>Cute Cases: £1.5</h4>
            <button onClick={this.handleClick} name="cases">
              Buy
            </button>
          </div>
        )}
        {this.props.revenue > 34 && (
          <div>
            <h4>Cherries: £5</h4>
            <button onClick={this.handleClick} name="cherries">
              Buy
            </button>
          </div>
        )}
        {this.props.revenue > 48 && (
          <div>
            <h4>Star Sprinkles: £4</h4>
            <button onClick={this.handleClick} name="stars">
              Buy
            </button>
          </div>
        )}
        {this.props.revenue > 64 && (
          <div>
            <h4>Rainbows: £11</h4>
            <button onClick={this.handleClick} name="rainbows">
              Buy
            </button>
          </div>
        )}
        {this.props.revenue > 82 && (
          <div>
            <h4>Unicorns: £15</h4>
            <button onClick={this.handleClick} name="unicorns">
              Buy
            </button>
          </div>
        )}
      </>
    );
  }
}

export default PerkAdder;
