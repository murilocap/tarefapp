import React from "react";

function Task({ children }) {
    return (
        <ul className="Task">
            {children}
        </ul>
    )
}

export default Task