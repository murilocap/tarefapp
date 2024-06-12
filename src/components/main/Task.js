import React from "react";
import CheckButton from "./CheckButton"

function Task({ finished, desc, date, reminder }) {
    return (
        <li className="Task">
            <span className="TaskDesc">
                <CheckButton checked={ finished } />
                <p>{ desc }</p>
            </span>

            <span className="TaskChips">

            </span>
        </li>
    )
}

export default Task