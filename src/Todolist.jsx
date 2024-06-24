import React, { useState } from 'react'

export default function Button() {

const[tasks,setTasks]=useState([]);
const[newTask,setnewtasks]=useState("");

function handleAddtasks(){
  if(newTask.trim() !==""){
    setTasks(t=>[...t,newTask]);
    setnewtasks("");
  }
  else{
    alert("enter a task");
  }
  

}
function handlechangeinput(event){
  setnewtasks(event.target.value)
  
}
function deletetasks(index){
  const updatedtask=tasks.filter((_,i)=>i!==index)
  setTasks(updatedtask);
  
}
function movetaskup(index){
  if(index >0){
    const updatedtask=[...tasks];
[updatedtask[index],updatedtask[index-1]]=
[updatedtask[index-1],updatedtask[index]];
setTasks(updatedtask);
  }
}
function movetaskdown(index){
  if(index <tasks.length -1){
    const updatedtask=[...tasks];
[updatedtask[index],updatedtask[index+1]]=
[updatedtask[index+1],updatedtask[index]];
setTasks(updatedtask);
  }
  
}

  return (
    <div className='todolist'>
     <div> 
      <h1>TO DO LIST</h1>
      <input type="text"  placeholder='Enter a Task..' 
                         value={newTask} 
                         onChange={handlechangeinput} />
    
    <button className='add-button' onClick={handleAddtasks}>Add Task</button>
    
    
    </div>
  <ol>  {tasks.map((task,index)=>
  <li key={index}   ><span className="text"  >{task}</span>
  <button  id="delete"onClick={()=>deletetasks(index)}>
    Delete </button>
    <button id="moveup" onClick={()=>movetaskup(index)}>Up
    👆 </button>
    <button  id="movedown"onClick={()=>movetaskdown(index)}>
    Down👇 </button>
    
    </li>)}
   </ol>
    </div>
  )
}
