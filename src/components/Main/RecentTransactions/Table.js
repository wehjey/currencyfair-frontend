function Table (props) {
    const { records } = props.messages;
    let tableItems;
    if (records) {
        tableItems = records.map((record, key) =>
            <tr key={key}>
                <td>{record.user_id}</td>
                <td>{record.currency_from}</td>
                <td>{record.currency_to}</td>
                <td>{record.amount_sell}</td>
                <td>{record.amount_buy}</td>
                <td>{record.rate}</td>
                <td>{record.time_placed}</td>
                <td>{record.originating_country}</td>
            </tr>
        );
    }

    return (
        <table>
            <thead>
            <tr>
                <th>User ID</th>
                <th>Currency From</th>
                <th>Currency To</th>
                <th>Amount Sell</th>
                <th>Amount Buy</th>
                <th>Rate</th>
                <th>Time Placed</th>
                <th>Originating Country</th>
            </tr>
            </thead>
            <tbody>
                {tableItems}
            </tbody>
        </table>
    );
}

export default Table;