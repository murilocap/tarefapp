import React from "react";

function List({ emoji, title, todoCount, listID, opened }) {
    function openList(list) {
        return null
    }

    return (
        <li className="List" id={opened ? "CurrentList" : ""}>
            <button onClick={openList(listID)}>
                <div>
                    <span id="ListEmoji">{ emoji }</span>
                    <span id="ListTitle">{ title }</span>
                </div>
                <span id="ListCount">{ todoCount }</span>
            </button>
        </li>
    )
}

export default List