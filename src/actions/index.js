import axios from "axios"
import { SET_TRADE_MESSAGES, SET_RATE_CHANGES, SET_COUNTRY_TRANSACTIONS } from "../constants/action-types"

const baseUrl = "https://currencyfair-backend.herokuapp.com/api/v1";

/**
 * Fetch trade messages from endpoint
 *
 * @returns {function(...[*]=)}
 */
export function fetchTradeMessages() {
    return dispatch => {
        let url = baseUrl + '/trade/message';
        axios.get(url).then((response) => {
            if (response.data.success) {
                dispatch(setTradeMessages(response.data.data))
            }
        }).catch((err)=>{
            console.log("Error in response");
            console.log(err);
        })
    }
};

/**
 * Fetch rate changes from endpoint
 *
 * @returns {function(...[*]=)}
 */
export function fetchRateChanges() {
    return dispatch => {
        let url = baseUrl + '/trade/all-rates';
        axios.get(url).then((response) => {
            if (response.data.success) {
                dispatch(setRateChanges(response.data.data))
            }
        }).catch((err)=>{
            console.log("Error in response");
            console.log(err);
        })
    }
};

/**
 * Fetch country total transactions
 *
 * @returns {function(...[*]=)}
 */
export function fetchCountryTotalTransactions() {
    return dispatch => {
        let url = baseUrl + '/trade/country-transactions';
        axios.get(url).then((response) => {
            if (response.data.success) {
                dispatch(setCountryTransactions(response.data.data))
            }
        }).catch((err)=>{
            console.log("Error in response");
            console.log(err);
        })
    }
};

export function setTradeMessages(payload) {
    return { type: SET_TRADE_MESSAGES, payload }
};

export function setRateChanges(payload) {
    return { type: SET_RATE_CHANGES, payload }
};

export function setCountryTransactions(payload) {
    return { type: SET_COUNTRY_TRANSACTIONS, payload }
};