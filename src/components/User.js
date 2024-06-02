import React from "react";

function User({ name, photo }) {
    return (
        <div className="User">
            <div className={!photo ? "UserPhoto" : "UserPhotoTemplate"}>
                {
                    photo ?
                    "" :
                    name.charAt(0)
                }
            </div>
            <p>Olá, <strong className="UserName">{name}</strong></p>
        </div>
    )
}

export default User