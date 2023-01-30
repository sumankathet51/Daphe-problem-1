import React from "react";

const SingleColorComponent = ({color}) => {
    return (
        <span className={ `text-${color}` }>
            { color },
        </span>
    );
}

export default SingleColorComponent;