import React from "react";

import "./App.css";
import CakeAdder from "./Components/CakeAdder";
import PriceAdjuster from "./Components/PriceAdjuster";
import ItemsGenerator from "./Components/ItemsGenerator";
import PerkAdder from "./Components/PerkAdder";

class App extends React.Component {
  state = {
    cakeCounter: 1,
    price: 2,
    revenue: 0,
    cakesSold: 0
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

  sellCakes = () => {
    this.setState({
      cakesSold: this.state.cakesSold + 1
    });
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
      let newRevenue = (currentState.price / 2) * currentState.cakesSold;
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
        <h5>Cupcakes sold: {this.state.cakesSold}</h5>
        <h4>Revenue: £{this.state.revenue}</h4>
        <ItemsGenerator
          generateItem={this.generateItem}
          items={this.state.items}
          revenue={this.state.revenue}
        />
        <PerkAdder revenue={this.state.revenue} />
        {/* {this.state.revenue > 10 && <h4>PipingBag: £5</h4>} */}
      </div>
    );
  }
}

export default App;
