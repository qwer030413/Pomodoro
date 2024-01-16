import { ReactElement } from "react";
import './todolist.css'
import ToDoForm from "./todoform";
import { uuid } from 'uuidv4';

uuid();
export default function ToDoList() : ReactElement{
    
    return(
        <ToDoForm/>
    );
}