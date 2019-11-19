import React from "react";
import basic from "../assets/basic.png";
import sprinkles from "../assets/sprinkles.png";
import foodColouring from "../assets/foodColouring.png";
import cases from "../assets/cases.png";
import cherries from "../assets/cherries.png";
import rainbows from "../assets/rainbows.png";
import stars from "../assets/stars.png";
import unicorns from "../assets/unicorns.png";

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
      cherries: { name: "Cherries", price: 5, cost: 0.05, click: 0 },
      cases: { name: "Cute Cases", price: 2, cost: 0.02, click: 0 },
      stars: { name: "Star Sprinkles", price: 4, cost: 0.04, click: 0 },
      rainbows: { name: "Rainbows", price: 11, cost: 0.11, click: 0 },
      unicorns: { name: "Unicorns", price: 15, cost: 0.15, click: 0 }
    }
  };
  handleClick = event => {
    const keys = Object.keys(this.state.perks);
    keys.forEach(key => {
      if (event.target.name === key) {
        this.props.adjustCost(this.state.perks[key].cost);
        this.props.purchasePerk(this.state.perks[key].price);

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
        <div className="container">
          <img className="basicCupcake" src={basic} alt="plain cupcake" />
          {this.state.perks.sprinkles.click > 0 && (
            <img className="sprinklesImg" src={sprinkles} alt="sprinkles"></img>
          )}
          {this.state.perks.foodColouring.click > 0 && (
            <img
              className="foodColouringImg"
              src={foodColouring}
              alt="foodColouring"
            ></img>
          )}
          {this.state.perks.cases.click > 0 && (
            <img className="casesImg" src={cases} alt="cases"></img>
          )}
          {this.state.perks.cherries.click > 0 && (
            <img className="cherriesImg" src={cherries} alt="cherries"></img>
          )}
          {this.state.perks.stars.click > 0 && (
            <img className="starsImg" src={stars} alt="stars"></img>
          )}
          {this.state.perks.rainbows.click > 0 && (
            <img className="rainbowsImg" src={rainbows} alt="rainbows"></img>
          )}
          {this.state.perks.unicorns.click > 0 && (
            <img className="unicornsImg" src={unicorns} alt="unicorns"></img>
          )}
        </div>
        {(this.props.revenue > 4 || this.state.perks.sprinkles.click > 0) && (
          <div className="sprinkles">
            <h4>Sprinkles: £1</h4> <p> : {this.state.perks.sprinkles.click}</p>
            <button onClick={this.handleClick} name="sprinkles">
              Buy
            </button>
          </div>
        )}
        {(this.props.revenue > 16 ||
          this.state.perks.foodColouring.click > 0) && (
          <div className="foodColouring">
            <h4>Food Colouring: £3</h4>
            <p> : {this.state.perks.foodColouring.click}</p>
            <button onClick={this.handleClick} name="foodColouring">
              Buy
            </button>
          </div>
        )}
        {(this.props.revenue > 28 || this.state.perks.cases.click > 0) && (
          <div className="cases">
            <h4>Cute Cases: £2</h4>
            <p> : {this.state.perks.cases.click}</p>
            <button onClick={this.handleClick} name="cases">
              Buy
            </button>
          </div>
        )}
        {(this.props.revenue > 40 || this.state.perks.cherries.click > 0) && (
          <div className="cherries">
            <h4>Cherries: £5</h4>
            <p> : {this.state.perks.cherries.click}</p>
            <button onClick={this.handleClick} name="cherries">
              Buy
            </button>
          </div>
        )}
        {(this.props.revenue > 52 || this.state.perks.stars.click > 0) && (
          <div className="stars">
            <h4>Star Sprinkles: £4</h4>
            <p> : {this.state.perks.stars.click}</p>
            <button onClick={this.handleClick} name="stars">
              Buy
            </button>
          </div>
        )}
        {(this.props.revenue > 64 || this.state.perks.rainbows.click > 0) && (
          <div className="rainbows">
            <h4>Rainbows: £11</h4>
            <p> : {this.state.perks.rainbows.click}</p>
            <button onClick={this.handleClick} name="rainbows">
              Buy
            </button>
          </div>
        )}
        {(this.props.revenue > 76 || this.state.perks.unicorns.click > 0) && (
          <div className="unicorns">
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
