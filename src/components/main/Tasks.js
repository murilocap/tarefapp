import React from "react";

function Tasks({ children }) {
    return (
        <ul id="Tasks">
            {children}
        </ul>
    )
}

export default Tasks