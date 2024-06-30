import React from "react";
import Task from "./Task";

function Tasks() {
    return (
        <ul id="Tasks">
            <Task finished={ false } desc={ "Exemplo de tarefa a fazer." }/>
            <Task finished={ false } desc={ "Exemplo de tarefa a fazer." }/>
            <Task finished={ false } desc={ "Exemplo de tarefa a fazer." }/>
            <Task finished={ false } desc={ "Exemplo de tarefa a fazer." }/>
            <Task finished={ false } desc={ "Exemplo de tarefa a fazer." }/>
            <Task finished={ false } desc={ "Exemplo de tarefa a fazer." }/>
            <Task finished={ false } desc={ "Exemplo de tarefa a fazer." }/>
            <Task finished={ false } desc={ "Exemplo de tarefa a fazer." }/>
            <Task finished={ true } desc={ "Exemplo de tarefa a fazer." }/>
            <Task finished={ true } desc={ "Exemplo de tarefa a fazer." }/>
            <Task finished={ true } desc={ "Exemplo de tarefa a fazer." }/>
            <Task finished={ true } desc={ "Exemplo de tarefa a fazer." }/>
        </ul>
    )
}

export default Tasks