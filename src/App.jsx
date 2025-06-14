import "./App.css"
import { useEffect, useState } from "react" 
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"


export default function App() {
  // State: load todos from localStorage on first render
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")

    // if no data, return empty array
    if (localValue == null) return []

    // parase stored JSON string to array
    return JSON.parse(localValue)
  })

  // Save todos to localStorage every time they changed
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])
  

  // Add a new todo item
  function addTodo(title) {
    setTodos(currentTodos => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ])
  }
  
  // Toggle completed status of a todo
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          // update complete value
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  // Delete a todo item by ID
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
  <>
  {/* Form to add a new todo */}
  <NewTodoForm onSubmit={addTodo} />

  {/* App heading */}
  <h1 className="header">Todo List</h1>

  {/* Display todo list */}
  <TodoList 
    todos={todos} 
    toggleTodo={toggleTodo} 
    deleteTodo={deleteTodo}
  />
  
  </>
  )
}