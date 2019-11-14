import React from "react";

import "./App.css";
import CakeAdder from "./Components/CakeAdder";
import PriceAdjuster from "./Components/PriceAdjuster";

class App extends React.Component {
  state = {
    cakeCounter: 1,
    price: 1,
    revenue: 1,
    items: []
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

  render() {
    return (
      <div className="App">
        <CakeAdder
          addCake={this.addCake}
          cakeCounter={this.state.cakeCounter}
        />
        <PriceAdjuster
          adjustPrice={this.adjustPrice}
          price={this.state.price}
        />
        <h5>Cupcakes sold: ??</h5>
        <h4>Revenue: £{this.state.revenue}</h4>
      </div>
    );
  }
}

export default App;
