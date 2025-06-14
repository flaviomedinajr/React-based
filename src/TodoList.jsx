import { TodoItem } from "./TodoItem"

// Component to render the list of todos
export function TodoList({todos, toggleTodo, deleteTodo}) {
    return (
        <ul className="list">
            {/* Show message if there are no todos */}
            {todos.length === 0 && "No Todos"}

            {/* Loop through todos and render each one */}
            {todos.map( todo => {
                return (
                    // pass all todo properties (id, title, completed)
                    <TodoItem {...todo}

                        // unique key for React 
                        key={todo.id} 

                        // function to toggle completed
                        toggleTodo={toggleTodo} 
                        
                        // function to delete todo
                        deleteTodo={deleteTodo}
                    />  
                )
            })}
        </ul>
    )
}