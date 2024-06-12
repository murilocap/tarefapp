import React from "react";

function Tasks({ children }) {
    return (
        <ul className="Tasks">
            {children}
        </ul>
    )
}

export default Tasks