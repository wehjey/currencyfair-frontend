import React from "react";
import Table from "./Table";

/**
 * Displays table of recent transactions
 * @param props
 * @returns {*}
 * @constructor
 */
function RecentTransactions(props) {
    return (
        <div>
            <h2>Recent Transactions</h2>
            <br/>
            <Table messages={props.messages}/>
        </div>
    );
}

export default RecentTransactions;