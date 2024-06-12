import React from "react";

function TitleChips({ type, state, count, label }) {
    return (
        <button className={state ? "TitleChips TitleChipsShow" : "TitleChips TitleChipsHide"}>
            { count + " " + label }
        </button>
    )
}

export default TitleChips