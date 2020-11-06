import React from "react";
import Table from "./Table";

/**
 * Displays table of recent rates
 * @param props
 * @returns {*}
 * @constructor
 */
function RecentRates(props) {
    return (
        <div>
            <h2>Recent Rates</h2>
            <br/>
            <Table rates={props.rates}/>
            <br/>
        </div>
    );
}

export default RecentRates;