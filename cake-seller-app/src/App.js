import React from "react";

import "./App.css";
import CakeAdder from "./Components/CakeAdder";
import PriceAdjuster from "./Components/PriceAdjuster";
import PerkAdder from "./Components/PerkAdder";

class App extends React.Component {
  state = {
    cakeCounter: 0,
    price: 2,
    revenue: 0,
    cakesSold: 0,
    cost: 2
  };

  addCake = newCakes => {
    this.setState(currentState => {
      return { cakeCounter: currentState.cakeCounter + newCakes };
    });
  };

  adjustPrice = newPrice => {
    this.setState(currentState => {
      return {
        price: Math.round((currentState.price + newPrice) * 100) / 100
      };
    });
  };

  adjustCost = newCost => {
    this.setState(currentState => {
      return { cost: currentState.cost + newCost };
    });
  };

  purchasePerk = perk => {
    this.setState(currentState => {
      return {
        revenue: currentState.revenue - perk
      };
    });
  };

  sellCakes = () => {
    if (
      this.state.cakeCounter > 1 &&
      this.state.cakeCounter > this.state.cakesSold
    ) {
      this.setState({
        cakesSold: this.state.cakesSold + 1
      });
    }
  };

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState(this.sellCakes(), this.adjustRevenue),
      Math.random() * (5000 - 500) + 500
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  adjustRevenue = () => {
    this.setState(currentState => {
      let newRevenue =
        (currentState.price / currentState.cost) * currentState.cakesSold;
      return { revenue: Math.round((newRevenue * 100) / 100) };
    });
  };

  render() {
    return (
      <div className="App">
        <CakeAdder
          addCake={this.addCake}
          cakeCounter={this.state.cakeCounter}
          cakesSold={this.state.cakesSold}
          revenue={this.state.revenue}
        />
        <PriceAdjuster
          adjustPrice={this.adjustPrice}
          price={this.state.price}
        />
        <div className="revenue">
          {this.state.cakesSold > 5 && this.state.revenue <= 5 ? (
            <h2 className="panic">Revenue: £{this.state.revenue}</h2>
          ) : (
            <h2>Revenue: £{this.state.revenue}</h2>
          )}
          <p>Cupcakes sold: {this.state.cakesSold}</p>
        </div>

        <PerkAdder
          revenue={this.state.revenue}
          adjustCost={this.adjustCost}
          purchasePerk={this.purchasePerk}
        />

        <div>
          {this.state.cakeCounter - this.state.cakesSold === 0 &&
            this.state.revenue > 0 &&
            window.alert("You ran out of cupcakes!")}
        </div>
        <div>
          {this.state.cakesSold > 2 &&
            this.state.revenue === 0 &&
            window.alert("You ran out of money!")}
          {this.state.cakesSold > 2 &&
            this.state.revenue === 0 &&
            clearInterval(this.interval)}
        </div>
      </div>
    );
  }
}

export default App;
