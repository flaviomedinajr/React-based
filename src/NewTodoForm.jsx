// Author: Flavio Medina 

import {useState} from "react"

// Form component for adding a new todo item
export function NewTodoForm({onSubmit}) {

    // State to store the input value
    const [newItem, setNewItem] = useState("")
    

    // Handle form submission
    function handleSubmit(e) {

        // prevent page reload
        e.preventDefault()

        // ignore empty input
        if (newItem === "") return 

        // pass new item to parent
        onSubmit(newItem)
        
        // clear input field
        setNewItem("")
    }

    return (
    <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
        <label htmlFor="item">New Item</label>

        {/* Input field bound to newItem state */}
        <input 
        value={newItem} 
        onChange={e => setNewItem(e.target.value)} 
        type="text" 
        id="item" 
        />
        </div>
        
        {/* Submit button to add the item */}
        <button className="btn">Add</button>
    </form>
    )
}