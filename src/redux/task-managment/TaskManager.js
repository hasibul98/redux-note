import { useDispatch, useSelector } from "react-redux";
import { addTask, toggleTask, deleteTask } from "./taskSlice";
import "../../App.css";
import React, { useState } from 'react'


function TaskManager() {
       const [task, setTask] = useState("");
       const tasks = useSelector((state)=>state.tasks);
       const dispatch = useDispatch();

       const handleSubmit = (e)=>{
              e.preventDefault();
              if(task.trim()){
                     dispatch(addTask(task));
                     setTask('');
              }
       }
  return (
    <div className="">
              <form onSubmit={handleSubmit}>
                     <input value={task} onChange={(e)=> setTask(e.target.value)} placeholder="Add a task" />
                     <button className="" type="submit">Add</button>
              </form>
              <ul>
              {
                     tasks.map((task)=> {
                            console.log(task);
                            
                            return(

                           
                            <li key={task.id}>
                                   <span style={{textDecoration: task.completed ? "line-through" : "none"}} onClick={()=>dispatch(toggleTask(task.id))}>
                                          {task.text}
                                   </span>
                                   <button  onClick={()=>dispatch(deleteTask(task.id))}>Delete</button>
                            </li>
                           
                     )})
              }
              </ul>
    </div>
  )
}

export default TaskManager