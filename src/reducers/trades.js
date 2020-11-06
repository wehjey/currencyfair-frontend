import { SET_TRADE_MESSAGES } from "../constants/action-types"

const initialState = {
    messages: [],
};

export function tradeMessages(state = initialState, action) {
    switch (action.type) {
        case SET_TRADE_MESSAGES: {
            return {
                ...state,
                messages: action.payload
            };
        }
        default:
            return state;
    }
}