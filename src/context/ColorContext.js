import React, {createContext, useReducer} from "react";
import ColorReducer, {initialState} from "../reducers/colorReducer";

export let ColorContext = createContext({});

export default function ColorProvider ({ children }) {
    const [state, dispatch] = useReducer(ColorReducer, initialState, undefined);
    const values = {
        state,
        dispatch
    }

    return (
            <ColorContext.Provider value={ values }>
                { children }
            </ColorContext.Provider>
    );
}
