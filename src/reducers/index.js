import { combineReducers } from 'redux';
import { tradeMessages } from "./trades"
import { rates } from "./rates"
import { transactions } from "./transactions"

const rootReducer = combineReducers({
    tradeMessages, rates, transactions
});

export default rootReducer;