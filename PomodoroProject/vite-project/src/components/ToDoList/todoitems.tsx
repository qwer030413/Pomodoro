import './todolist.css';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export function ToDoItem(props){
    return(
        <div className="todoItems">
            <p>{props.label}</p>
            <div className='functions'>
                <FaEdit />
                <MdDelete />
                

            </div>
            


        </div>
    );
}