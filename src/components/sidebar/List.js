import React from "react";

function List({ emoji, title, todoCount, listID, opened }) {
    function openList(list) {
        return null
    }

    return (
        <li className="List" id={opened ? "CurrentList" : ""}>
            <button onClick={openList(listID)}>
                <div>
                    <span className="ListEmoji">{ emoji }</span>
                    <span className="ListTitle">{ title }</span>
                </div>
                <span className="ListCount">{ todoCount }</span>
            </button>
        </li>
    )
}

export default List