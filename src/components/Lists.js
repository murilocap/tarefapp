import React from "react";
import List from "./List";

function Lists() {
    return (
        <ul className="Lists">
            <List emoji={"🔥"} title={"Para Hoje"} todoCount={7} listID={""} opened={true}/>
            <List emoji={"⏰"} title={"Lembretes"} todoCount={2} listID={""} opened={false}/>
            <List emoji={"📌"} title={"Agendadas"} todoCount={3} listID={""} opened={false}/>
            <List emoji={"📆"} title={"Rotineiras"} todoCount={5} listID={""} opened={false}/>
        </ul>
    )
}

export default Lists