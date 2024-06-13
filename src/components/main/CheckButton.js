import React from "react";

function CheckButton({ checked }) {
    return (
        <button className={ 
            checked
            ? "CheckButton CheckButtonDone"
            : "CheckButton CheckButtonUndone" 
        }>
            {
                checked
                ? <ion-icon name="checkmark-outline"></ion-icon>
                : ""
            }
        </button>
    )
}

export default CheckButton