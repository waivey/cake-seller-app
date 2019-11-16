import React from "react";

class PerkAdder extends React.Component {
  state = {
    perks: {
      foodColouring: {
        name: "Food Colouring",
        price: 3,
        cost: 0.3,
        click: 0
      },
      sprinkles: {
        name: "Sprinkles",
        price: 1,
        cost: 0.1,
        click: 0,
        isVisible: false
      },
      cherries: { name: "Cherries", price: 5, cost: 0.5, click: 0 },
      cases: { name: "Cute Cases", price: 2, cost: 0.2, click: 0 },
      stars: { name: "Star Sprinkles", price: 4, cost: 0.4, click: 0 },
      rainbows: { name: "Rainbows", price: 11, cost: 1.1, click: 0 },
      unicorns: { name: "Unicorns", price: 15, cost: 1.5, click: 0 }
    }
  };
  handleClick = event => {
    const keys = Object.keys(this.state.perks);
    keys.forEach(key => {
      if (event.target.name === key) {
        this.props.adjustCost(this.state.perks[key].cost);
        this.props.purchasePerk(this.state.perks[key].price);
        setTimeout(this.props.adjustCost, 6000, -this.state.perks[key].cost);

        this.setState(
          currentState => {
            return {
              click: currentState.perks[key].click++
            };
          },
          () => {
            setTimeout(() => {
              this.setState(currentState => {
                return {
                  click: currentState.perks[key].click--
                };
              });
            }, 15000);
          }
        );
      }
    });
  };

  render() {
    return (
      <>
        {(this.props.revenue > 4 || this.state.perks.sprinkles.click > 0) && (
          <div>
            <h4>Sprinkles: £1</h4> <p> : {this.state.perks.sprinkles.click}</p>
            <button onClick={this.handleClick} name="sprinkles">
              Buy
            </button>
          </div>
        )}
        {(this.props.revenue > 16 ||
          this.state.perks.foodColouring.click > 0) && (
          <div>
            <h4>Food Colouring: £3</h4>
            <p> : {this.state.perks.foodColouring.click}</p>
            <button onClick={this.handleClick} name="foodColouring">
              Buy
            </button>
          </div>
        )}
        {(this.props.revenue > 28 || this.state.perks.cases.click > 0) && (
          <div>
            <h4>Cute Cases: £2</h4>
            <p> : {this.state.perks.cases.click}</p>
            <button onClick={this.handleClick} name="cases">
              Buy
            </button>
          </div>
        )}
        {(this.props.revenue > 40 || this.state.perks.cherries.click > 0) && (
          <div>
            <h4>Cherries: £5</h4>
            <p> : {this.state.perks.cherries.click}</p>
            <button onClick={this.handleClick} name="cherries">
              Buy
            </button>
          </div>
        )}
        {(this.props.revenue > 52 || this.state.perks.stars.click > 0) && (
          <div>
            <h4>Star Sprinkles: £4</h4>
            <p> : {this.state.perks.stars.click}</p>
            <button onClick={this.handleClick} name="stars">
              Buy
            </button>
          </div>
        )}
        {(this.props.revenue > 64 || this.state.perks.rainbows.click > 0) && (
          <div>
            <h4>Rainbows: £11</h4>
            <p> : {this.state.perks.rainbows.click}</p>
            <button onClick={this.handleClick} name="rainbows">
              Buy
            </button>
          </div>
        )}
        {(this.props.revenue > 76 || this.state.perks.unicorns.click > 0) && (
          <div>
            <h4>Unicorns: £15</h4>
            <p> : {this.state.perks.unicorns.click}</p>
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
