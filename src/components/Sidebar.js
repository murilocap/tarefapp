import React from "react";

function Sidebar({ children }) {
    return (
        <aside className="Sidebar">
            { children }
        </aside>
    )
}

export default Sidebar