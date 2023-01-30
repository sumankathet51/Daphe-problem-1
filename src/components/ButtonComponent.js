import '../css/style.css'
import React, {useContext, useState} from "react";
import {ColorContext} from "../context/ColorContext";
import {ADD_COLOR} from "../Constants/constants";

const ButtonComponent = ({colors}) => {
    const [currentColor, setCurrentColor] = useState(colors[0])
    const { dispatch } = useContext(ColorContext);

    const addColorHandler = () => {
        const color = changeColor(currentColor, colors);
        setCurrentColor(color)
        dispatch({ type: ADD_COLOR, payload: color });
    };

    return (
        <div className={'button-container'}>
            <button className={`bg-${currentColor}`}
                    onClick={ addColorHandler }>
                Click Me
            </button>
        </div>
    );

}

function changeColor(currentColor, colors) {
    if (currentColor === 'blue') {
        return 'green';
    }

    const key = Math.floor(Math.random() * colors.length);
    return colors[key];

}


export default ButtonComponent;