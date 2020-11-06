import { SET_RATE_CHANGES } from "../constants/action-types"

const initialState = {
    rates: [],
};

export function rates(state = initialState, action) {
    switch (action.type) {
        case SET_RATE_CHANGES: {
            return {
                ...state,
                rates: action.payload
            };
        }
        default:
            return state;
    }
}