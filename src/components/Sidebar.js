import React from "react";
import User from './User';
import LineDivisor from './LineDivisor';
import Panel from './Panel';

// const img = "https://i.pinimg.com/736x/dc/28/a7/dc28a77f18bfc9aaa51c3f61080edda5.jpg"
const img = "";

function Sidebar() {
    return (
        <aside className="Sidebar">
            <User name={"Murilo Capita"} photo={img}/>
            <LineDivisor />
            <Panel />
        </aside>
    )
}

export default Sidebar