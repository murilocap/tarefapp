import React from "react";
import User from './User';
import LineDivisor from './LineDivisor';
import Panel from './Panel';

function Sidebar() {
    return (
        <aside className="Sidebar">
            <User name={"Murilo"} photo={""}/>
            <LineDivisor />
            <Panel />
        </aside>
    )
}

export default Sidebar