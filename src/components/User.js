import React from "react";

function User({ name, photo }) {
    function openUser() {
        return
    }

    function profilePhotoLoader() {
        if ( photo ) {
            return `background-image: url(` + photo + `)`
        } else {
            `opacity: 1`
        }
    }

    return (
        <button id="User" onClick={openUser()}>
            <div
            className="UserProfile"
            id={ photo ? "UserPhoto" : "UserPlaceholder" }
            style={ profilePhotoLoader() }
            // style={ photo ? `background-image: url(` + photo + `)` : `` }
            >
                {
                    !photo ?
                    <span>{name.charAt(0)}</span>
                    : ""
                }
            </div>
            <label>Olá, <strong className="UserName">{name}</strong></label>
        </button>
    )
}

export default User