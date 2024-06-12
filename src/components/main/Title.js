import React from "react";
import TitleChips from "./TitleChips";

function Title({ listEmoji, listTitle }) {
    return (
        <div className="Title">
            <h1>
                <span id="ListEmoji">{ listEmoji }</span>
                { listTitle }
            </h1>
            <span>
                <TitleChips type="Unfinished" state={ true } count={7} label="Pendentes"/>
                <TitleChips type="Finished" state={ false } count={5} label="Concluídas"/>
            </span>
        </div>
    )
}

export default Title