import React from "react";

function List({ emoji, title, todoCount }) {
    return (
        <li>
            <div>
                <span>{ emoji }</span>
                <span>{ title }</span>
            </div>
            { todoCount }
        </li>
    )
}

export default List