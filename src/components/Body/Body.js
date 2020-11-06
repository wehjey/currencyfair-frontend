import React from "react";
import { connect } from "react-redux";
import { fetchTradeMessages, fetchRateChanges, fetchCountryTotalTransactions } from "../../actions";
import Main from "../Main"

class Body extends React.Component {

    constructor(props) {
        super(props);
        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        this.loadData();
        setInterval(this.loadData, 5000) // load rates and transactions every 3 secs
    }

    /**
     *  Load rates and transactions
     * */
    loadData() {
        this.props.fetchTradeMessages();
        this.props.fetchRateChanges();
        this.props.fetchCountryTotalTransactions();
    }

    render() {
        const { messages } = this.props.messages;
        const { rates } = this.props.rates;
        const { transactions } = this.props.transactions;
        return (
            <div className="row">
                <Main tradeMessages={messages} rates={rates} transactions={transactions}/>
            </div>
        )
    };
}
const mapStateToProps = (state) =>{
    return {
        messages : state.tradeMessages,
        rates: state.rates,
        transactions: state.transactions
    };
};

export default connect(
    mapStateToProps,
    { fetchTradeMessages, fetchRateChanges, fetchCountryTotalTransactions }
)(Body);