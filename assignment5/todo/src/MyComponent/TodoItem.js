import React from 'react'
import { Link } from 'react-router-dom';

export const TodoItem = React.memo(({ todo, onDelete, onEdit }) => {
  return (
    <div className='todo-lists'>
      <h3>{todo?.sno}. {todo?.title}</h3>
      <p>{todo?.desc}</p>
      <Link to="/edit"><button className="editBtn" onClick={() => onEdit(todo)}>Edit</button></Link>
      <button className="deleteBtn" onClick={() => onDelete(todo)}>Delete</button>
    </div>
  )
});
