import { ReactElement } from "react";
import './todolist.css'
import ToDoButton from "../buttons/todoButton";
import { useState } from "react"
import { ToDoItem } from "./todoitems";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import {motion} from 'framer-motion';

export default function ToDoList() : ReactElement{
    const [newToDo, setNewToDo] = useState([] as any);
    const [newInput, setNewInput] = useState('');
    const [currentid, setid] = useState(0);
    
    function add(input : string)
    {
        setNewToDo([
            ...newToDo, 
            {id: currentid, todo: input}
        ]);
        setid(currentid + 1);
    }
    const handleRemoveItem = name => {
        setNewToDo(newToDo.filter(item => item.todo !== name))
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
                    // <ToDoItem label = {td.todo} key = {td.id} />
                    <div className="todoItems">
                        <p>{td.todo}</p>
                        <div className='functions'>
                            <div className="icon"><FaEdit /></div>
                            <motion.div 
                            whileHover={{ 
                                scale: 1.5,
                                textShadow: "0px 0px 8px rgb(255, 255, 255)",
                             }}
                             whileTap={{
                                scale:1,
                             }}
                             transition={{ type: "spring", stiffness: 400, damping: 17 }}

                            className="icon"onClick={() => handleRemoveItem(td.todo)}><MdDelete /></motion.div>
                            
                            
            
                        </div>
                        
            
            
                    </div>
                ))}
                
            </div>
            
            
        </>
    );
}