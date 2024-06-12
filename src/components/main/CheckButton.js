import React from "react";

function CheckButton({ checked }) {
    return (
        <button className={ 
            checked
            ? "CheckButton CheckButtonDone"
            : "CheckButton CheckButtonUndone" 
        }></button>
    )
}

export default CheckButton