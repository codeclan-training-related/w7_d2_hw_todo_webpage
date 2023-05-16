import "./App.css";
import { useState } from "react";

function App() {
  //state
  const [todoList, setTodos] = useState([
    { id: 1, name: "Buy shopping", priority: "high" },
    { id: 2, name: "Clean bathroom", priority: "low" },
    { id: 3, name: "Car's MOT", priority: "low" },
  ]);


  

 // List rendering using map
 const todoitem = todoList.map((todo) => (
  <li key={todo.id} className={todo.priority}>
    {todo.name}
    <button onClick={()=>deleteTodo(todo.id)}>Finished</button>
  </li>
));


  // Function to hold newtodo
  // value={newTodo} onChange={handleNewTodo}
  const [newTodo, setNewTodo]=useState('')
  const handleNewTodo=(event)=>{
     setNewTodo(event.target.value);
     console.log(`${newTodo}`)
  };
//function to hold new priority
const [newPri, setNewPri]=useState('')
const handlePriorityChange = (event) => {
  setNewPri(event.target.value);
};
  
const [error, setError] = useState("");

  //submit new todos
  // make a new object using newTodo
  //on sumbit--> setTodos: add object to todolist 
const saveNewTodo=(event)=>{
  event.preventDefault();


  if (!newTodo || !newPri) {
    setError("reminder: Enter a todo and select a priority.");
    return;
  }

  const todoObject={id:Date.now(),name:newTodo,priority:newPri};
  const newtodos=[...todoList,todoObject]
  setTodos(newtodos);
  setNewTodo('');
  setNewPri('');
  setError('');

}




// function to deleteTodo
const deleteTodo=function(todoId){
  const newList=todoList.filter((todo)=>todo.id!=todoId)
  setTodos(newList)
  console.log(`todo id ${todoId} is deleted`)
}



  return (
    <>
      <body>
        <header>TO DO LIST</header>
        <main>
        {/* {error && <p>{error}</p>} */}

          {/* <form> */}
            <form onSubmit={saveNewTodo}>
            <div className="header">
              <label htmlFor="new-todo">Add More:</label>
              <input
                id="new-todo"
                type="text"
               
                onChange={handleNewTodo}
              />
            </div>
           {/* ------------------priority */}
           <div>
              <div>
                <input
                  type="radio"
                  id="highPri"
                  name="Priority"
                  value='high'
                  checked={newPri === "high"}
                onChange={handlePriorityChange}
             
                />
                <label htmlFor="highPri">High Priority</label>
            </div>
            <div>
                <input
                  type="radio"
                  id="lowPri"
                  name="Priority"
                  value='low'
                  checked={newPri === "low"}
                  onChange={handlePriorityChange}
                />
                <label htmlFor="lowPri">Low Priority</label>
            </div>
            </div>

            {/* --------------------------------- */}
            <input type="submit" value="Save New Todo" />
          </form>
         <p>{error}</p>
          <ul>{todoitem}</ul>
        </main>
      </body>
    </>
  );
}

export default App;
