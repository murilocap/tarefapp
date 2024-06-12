import React from "react";

function User({ name, photo }) {
    function openUser() {
        return
    }

    return (
        <button id="User" onClick={openUser()}>
            <div
            className="UserProfile"
            id={ photo ? "UserPhoto" : "UserPlaceholder" }
            >
                {
                    !photo ?
                    <span>{name.charAt(0)}</span>
                    : ""
                }
            </div>
            <label><strong className="UserName">{name}</strong></label>
        </button>
    )
}

export default User