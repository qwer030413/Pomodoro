import { ReactElement, ReactNode } from "react";
import './todolist.css'
import ToDoButton from "../buttons/todoButton";
import { useState } from "react"
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import {motion} from 'framer-motion';
import { FaCheckCircle } from "react-icons/fa";
import { ImRadioUnchecked } from "react-icons/im";
import EditButton from "../buttons/editButton";
import toast, { Toaster } from 'react-hot-toast';
import ClearButton from "../buttons/ClearButton";

export default function ToDoList() : ReactElement{
    const [newToDo, setNewToDo] = useState([] as any);
    const [newInput, setNewInput] = useState('');
    const [newEdit, setNewEdit] = useState('');
    const [currentid, setid] = useState(0);
    const [currentTask, setCurrentTask] = useState("Select a Task!");
    const [taskIndicator, setTaskIndicator] = useState(null);
    function add(input : string)
    {
        setNewToDo([
            ...newToDo, 
            {id: currentid, todo: input, completed: false, editing: false, workingOn: false} 
        ]);
        setid(currentid => currentid + 1);
        console.log(currentid);
    }
    const handleRemoveItem = (id: number) => {
        setNewToDo(newToDo.filter((item: { id: number; }) => item.id !== id))
    }
    function clicked()
    {
        let title = (document.getElementById("txt") as HTMLInputElement).value;
        if(title.trim() != ''){
            add(newInput);
            (document.getElementById("txt") as HTMLInputElement).value = "";
            
        }
        else{
            toast.error("Task can't be blank!", {id:"Blank!"});
        }
    }

    function completeclick(id:number){

        setNewToDo(newToDo.map(td => td.id === id ? {...td, completed: !td.completed} : td))
        
            
    }
    function curtask(id:number, task:string)
    {
        setNewToDo(newToDo.map(td => td.id === id ? {...td, workingOn: !td.workingOn} : td));
        
        
        setTaskIndicator(id);
        setCurrentTask(task);
    }
    
    function editclick(id:number){
        setNewToDo(newToDo.map(td => td.id === id ? {...td, editing: !td.editing} : td))
        
        
            
    }

    function clear()
    {
        setNewToDo(newToDo.filter((item: { id: number; }) => item.id === -1))
    }
    function edit(id:number){
        let title = (document.getElementById("edit") as HTMLInputElement).value;
        console.log(title);
        if(title.trim() != ''){
        setNewToDo(newToDo.map(td => td.id === id ? {...td, todo:title, editing: !td.editing} : td));
            
        }
        else{
            toast.error("Edit can't be Blank!", {id:"editBlank!"})
        }
    }
    
    

    
    return(
        <>
        {/* <div><Toaster/></div> */}
        
            <div className="ToDoConent">
                <div className="todoForm">
                    <h1 className="todotitle"> <h1 className="currentTask">Current Task:</h1> {currentTask}</h1>
                    <hr className="todoDivider"/>

                    <div className="addbar">
                        <motion.input id = "txt" type="text" required={true} placeholder="Add task..." className="todoinput" 
                        onChange={(e) => setNewInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter")
                                clicked();
                            }}
                            whileFocus = {{
                                scale: 1.01
                             }}
                        ></motion.input>
                        {ToDoButton(clicked)}
                    </div>
                </div>
                {(newToDo.length > 0? 
                (<div className="clearBtn">{ClearButton(() =>clear(), "Clear All")}</div>):(<div></div>)
                )}
                {newToDo.map((td : any) => (


                    td.editing === true ?
                    (
                        <div className="addbar">
                        <input id = "edit" type="text" required={true} placeholder="Edit Task..." className="editinput" onChange={(e) => setNewEdit(e.target.value)}></input>
                        {EditButton(() => editclick(td.id), "Cancel")}
                        {EditButton(() => edit(td.id), "Done")}
                        
                    </div>
                    )


                    :(
                        <motion.div 
                        className={td.id == taskIndicator?  "todoItems workingon":"todoItems" } 
                        
                        key={td.id} 
                        variants={{
                            before:{opacity:0, marginTop:0},

                        }}
                        initial = {{opacity:0, y: -20}}
                        animate = {{opacity:1, y: 0}}
                        transition={{duration:0.5, type: "spring", stiffness: 600, damping: 13}}
                        whileHover={{ 
                            scale: 1.03,
                            textShadow: "0px 0px 8px rgb(255, 255, 255)",
                            
                         }}
                         whileTap={{
                            scale:1,
                            
                         }}
                         
                        >
                        
                        {(td.completed === false ? 
                        (<div className="checkicon"onClick={() => completeclick(td.id)}><ImRadioUnchecked /></div>) 
                        : (<div className="checkicon"onClick={() => completeclick(td.id)}><FaCheckCircle /></div>) 
                        )}

                        <div className="todolabel" onClick={() => curtask(td.id, td.todo)}>
                            <p className={td.completed == true? "completed ":""}>{td.todo}</p>
                        </div>
                        
                        <div className='functions'>
                            <motion.div 
                            className="icon"
                            whileHover={{ 
                                scale: 1.5,
                                textShadow: "0px 0px 8px rgb(255, 255, 255)",
                             }}
                             whileTap={{
                                scale:1,
                             }}
                             transition={{ type: "spring", stiffness: 400, damping: 17 }}
                             onClick={() => editclick(td.id)}
                            ><FaEdit /></motion.div>
                            <motion.div 
                            whileHover={{ 
                                scale: 1.5,
                                textShadow: "0px 0px 8px rgb(255, 255, 255)",
                             }}
                             whileTap={{
                                scale:1,
                             }}
                             transition={{ type: "spring", stiffness: 400, damping: 17 }}

                            className="icon"
                            onClick={() => handleRemoveItem(td.id)}
                            ><MdDelete /></motion.div>
                            
                            
            
                        </div>
                    </motion.div>
                    )       
                ))}
            </div>
        </>
    );
}