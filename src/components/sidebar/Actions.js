import React from "react";
import PrimaryButton from "../PrimaryButton.js"
import SecondaryButton from "../SecondaryButton.js"


function Actions() {
    function newTask() {
        return
    }    
    function newList() {
        return
    }

    return (
        <div className="Actions">
            <SecondaryButton label={"Nova Lista"} onClick={newList()}/>
            <PrimaryButton label={"Nova Tarefa"} onClick={newTask()}/>
        </div>
    )
}

export default Actions