import React from "react";
import PropTypes from "prop-types";
import Footer from "../Footer";
import RecentTransactions from "./RecentTransactions"
import RecentRates from "./RecentRates"
import Map from "./Map";
import "./main.css"

class Main extends React.Component {

  render() {
    return (
      <div className="col-12 col-s-12 main-content">
        <div className="container">
          <Map transactions={this.props.transactions}/>
          <RecentRates rates={this.props.rates}/>
          <RecentTransactions messages={this.props.tradeMessages}/>
          <Footer />
        </div>
      </div>
    );
  }
}

// Component must receive these props
Main.propTypes = {
  tradeMessages: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired,
  ]),
  rates: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired,
  ]),
};

export default Main;
