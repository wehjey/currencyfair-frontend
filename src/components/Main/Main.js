import React from 'react';
import NavTab from "../NavTab"
import TransactBox from "../TransactBox";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import Modal from "../Modal";
import "./main.css"

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.showModal = this.showModal.bind(this)
  }

  /**
   * Open modal
   */
  showModal() {
    document.getElementById("modal").style.display = "block";
  }

  render() {
    return (
      <div className="col-8 col-s-6 main-content">
        <div className="container">
          <NavTab />
          <div className="clearfix"/>

          <div className="info-box">
            <div className="head-text">Let's set up your transaction!</div>
            <div className="sub-text">
              Specify the amount to be sent or received.
            </div>
          </div>

          <TransactBox />

          <div className="nb-div">
            <button
              id="next-btn"
              type="button"
              onClick={this.showModal}
              className="btn btn-large btn-primary"
            >
              Next
            </button>
          </div>

          {/* Hidden side bar for mobile view */}
          <Sidebar displayClass="sb-hidden" />
          <Footer />
          <Modal />
        </div>
      </div>
    );
  }
}

export default Main;
