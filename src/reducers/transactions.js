import { SET_COUNTRY_TRANSACTIONS } from "../constants/action-types"

const initialState = {
    transactions: [],
};

export function transactions(state = initialState, action) {
    switch (action.type) {
        case SET_COUNTRY_TRANSACTIONS: {
            return {
                ...state,
                transactions: action.payload
            };
        }
        default:
            return state;
    }
}