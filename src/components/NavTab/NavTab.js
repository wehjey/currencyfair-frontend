import React from "react";
import "./navtab.css"

class NavTab extends React.Component {
    render() {
        return (
            <div className="navtab">
                <div className="step active">
                    <div className="step-name">Step 1</div>
                    <div className="step-desc">Transaction Info</div>
                </div>
                <div className="step">
                    <div className="step-name">Step 2</div>
                    <div className="step-desc">Recipient Info</div>
                </div>
                <div className="step">
                    <div className="step-name">Step 3</div>
                    <div className="step-desc">Make Payment</div>
                </div>
            </div>
        )
    };
}

export default NavTab;