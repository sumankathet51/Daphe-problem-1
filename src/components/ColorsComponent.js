import React, {useContext} from "react";
import {ColorContext} from "../context/ColorContext";
import SingleColorComponent from "./SingleColorComponent";

const ColorsComponent = () => {
    const { state } = useContext(ColorContext);
    return (
        <p>
            {
                state.colors.length > 0 &&
                state.colors.map((color, index) =>
                    <SingleColorComponent color={color} key={index} />
                )
            }
        </p>
    );
}

export default ColorsComponent;