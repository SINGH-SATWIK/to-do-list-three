import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
   const initialTodoItems=[{
    name : "Buy Milk",
    dueDate :"28/02/2024",
   },
   {
    name : "Go to college",
    dueDate :"28/02/2024",
  }];

  const [todoItems,setTodoItems]=useState(initialTodoItems);

  const handleNewItem =(itemName,itemDueDate)=>{
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const newTodoItem=[...todoItems,{name: itemName,dueDate: itemDueDate}];
    setTodoItems(newTodoItem);
  };
  
  const handleDeleteItem=(todoItemName)=>{
    const newTodoItems=todoItems.filter((item)=>item.name!=todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
  <center className="todo-container">
    <AppName></AppName>
    <AddTodo onNewItem={handleNewItem}></AddTodo>
    {todoItems.length===0 && <WelcomeMessage></WelcomeMessage>}
    <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
  </center>
  );
}

export default App;
