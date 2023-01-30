import {ADD_COLOR} from "../Constants/constants";

export const initialState = {
    'colors': []
}

const colorReducer = (state, action) => {

    switch (action.type){
        case ADD_COLOR:
            if (!state.colors.includes(action.payload)) {
                return {
                    ...state,
                    colors: [...state.colors, action.payload]
                }
            }
                return {
                    ...state,
                    colors: [...state.colors]
                }

        default:
            throw new Error('No case defined')
    }
}

export default colorReducer;