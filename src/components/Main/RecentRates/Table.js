import React from "react";

function Table (props) {
    let tableItems;
    const rates = props.rates;
    if (rates) {
        tableItems = rates.map((rate, key) =>
            <tr key={key}>
                <td>{rate.currency_from}</td>
                <td>{rate.currency_to}</td>
                <td>{rate.previous_rate}</td>
                <td>{rate.current_rate}</td>
                <td style={rate.percentage_change < 0 ? {color: "red"} : {color: "green" }}>{rate.percentage_change}%</td>
            </tr>
        );
    }

    return (
        <table>
            <thead>
            <tr>
                <th>Currency From</th>
                <th>Currency To</th>
                <th>Previous Rate</th>
                <th>Current Rate</th>
                <th>Percentage Change</th>
            </tr>
            </thead>
            <tbody>
                {tableItems}
            </tbody>
        </table>
    );
}

export default Table;