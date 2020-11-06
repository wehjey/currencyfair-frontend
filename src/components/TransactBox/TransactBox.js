import React from "react";
import "./transactbox.css"

class TransactBox extends React.Component {
    render() {
        return (
            <div>
                <div className="send-box active">
                    <div className="sb-info">
                        <div className="send-top-text">YOU SEND</div>
                        <div className="sb-amount">
                            &euro; 2,000<span className="sb-amount-decimal">.00</span>
                        </div>
                    </div>
                    <div className="sb-country">
                        <img
                            src={"./images/eu.png"}
                            className="sb-flag float-left"
                            alt="Sender Flag"
                        />
                        <div className="sb-currency float-right">EUR</div>
                    </div>
                    <div className="clearfix"/>
                </div>
                <div className="rec-box">
                    <div className="sb-info">
                        <div className="send-top-text">RECEIVER GETS</div>
                        <div className="sb-amount">
                            &pound; 1,717<span className="sb-amount-decimal">.94</span>
                        </div>
                    </div>
                    <div className="sb-country">
                        <img
                            src={"./images/gb.png"}
                            className="sb-flag float-left"
                            alt="Sender Flag"
                        />
                        <div className="sb-currency float-right">GBP</div>
                    </div>
                    <div className="clearfix"/>
                </div>
            </div>
        )
    };
}

export default TransactBox;