import React from "react";
import List from "./List";

function Lists() {
    return (
        <ul className="Lists">
            <List emoji={"🔥"} title={"Para Hoje"} todoCount={7}/>
            <List emoji={"⏰"} title={"Lembretes"} todoCount={2}/>
            <List emoji={"📌"} title={"Agendadas"} todoCount={3}/>
            <List emoji={"📆"} title={"Rotineiras"} todoCount={5}/>
        </ul>
    )
}

export default Lists