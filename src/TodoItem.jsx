// Author: Flavio Medina 

// Component to display a single todo item
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
      <li>
        <label>
        {/* Checkbox to toggle completed status */}
          <input 
            type="checkbox" 
            checked={completed} 
            onChange={e => toggleTodo(id, e.target.checked)} 
          />
          {/* Display the todo title */}
          {title}
        </label>

        {/* Button to delete the todo item */}
        <button 
          onClick={() => deleteTodo(id)} 
          className="btn btn-danger"
        >
          Delete
        </button>
      </li>
    )
  }
  