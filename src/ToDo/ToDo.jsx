import {useState} from "react"

function ToDo(){
  const [tasks, setTasks] = useState([]);

  function handleClick(){
    const task = document.getElementById("task").value;
    if(task!=""){
      setTasks(t=>[...t, task]);
      document.getElementById("task").value = "";
    }
  }

  function deleteTask(indexToDelete){
    setTasks(t=>t.filter((_, index)=>index!==indexToDelete));
  }

  return(
    <div className="box">
      <h1>To Do List</h1>
      <input id="task"/>
      <button onClick={handleClick}>Add</button>
      <ol>
        {tasks.map((element, index)=><li key={index} onClick={(()=>deleteTask(index))}>{element}</li>)}
      </ol>
    </div>
  )
}

export default ToDo