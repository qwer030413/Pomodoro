import { ReactElement } from "react";
import './todolist.css'
import ToDoButton from "../buttons/todoButton";
import { useState } from "react"
import { ToDoItem } from "./todoitems";
export default function ToDoList() : ReactElement{
    const [newToDo, setNewToDo] = useState([] as any);
    const [newInput, setNewInput] = useState('');
    let nextId = 0;
    function add(input : string)
    {
        setNewToDo([
            ...newToDo, 
            {id: nextId++, todo: input}
        ]);
    }
    function clicked()
    {
        let title = document.getElementById("txt").value;
        
        if(title != ''){
            add(newInput);
            document.getElementById("txt").value = "";
        }
        
    }
    
    return(
        <>
            <div className="ToDoConent">
                <div className="todoForm">
                    <h1 className="todotitle">Current Task:</h1>
                    <hr className="todoDivider"/>

                    <div className="addbar">
                        <input id = "txt" type="text" required={true} placeholder="Add task..." className="todoinput" onChange={(e) => setNewInput(e.target.value)}></input>
                        {ToDoButton(clicked)}
                    </div>
                </div>
                {newToDo.map((td) => (
                    <ToDoItem label = {td.todo}/>
                ))}
                
            </div>
            
            
        </>
    );
}