import React from "react";
import "./sidebar.css"

class Sidebar extends React.Component {
    render() {
      return (
          <div className={this.props.displayClass === "" ? "sidebar-outer" : "sidebar-outer sb-hidden"}>
            <div className="sidebar-box">
              <div className="send-header">Sending Details</div>

              <div className="send-info">
                <span className="float-left sndi-text">You Send</span>
                <span className="float-right sndi-amount">&euro;2000.00</span>
                <div className="clearfix"/>
              </div>

              <div className="recv-header">
                <span className="float-left recv-details">Receiving Details</span>
                <span className="float-right recv-info">
              As of right now <i className="fa fa-question-circle"/>
            </span>
                <div className="clearfix"/>
              </div>

              <div className="recv-body">
                <div className="recv-row">
                  <span className="float-left">Rate</span>
                  <span className="float-right recv-row-val">0.86022</span>
                  <div className="clearfix"/>
                </div>
                <div className="recv-row">
                  <span className="float-left">Fee</span>
                  <span className="float-right recv-row-val">&pound;2.50</span>
                  <div className="clearfix"/>
                </div>
                <div className="recv-row">
                  <span className="float-left">Delivery Date</span>
                  <span className="float-right recv-row-val">25th November</span>
                  <div className="clearfix"/>
                </div>
                <div className="recv-row">
                  <span className="float-left">Recipient Gets</span>
                  <span className="float-right recv-row-val">&pound;1717.94</span>
                  <div className="clearfix"/>
                </div>
              </div>

              <div className="save-box">
                You save &pound;66.19 compared to your bank!
              </div>
            </div>
          </div>
      )
    };
}

export default Sidebar;