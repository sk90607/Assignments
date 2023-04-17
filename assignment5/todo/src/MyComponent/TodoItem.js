import React from 'react'
// import { Link } from 'react-router-dom';

export const TodoItem = React.memo(({ todo, onDelete }) => {
  return (
    <div className='todo-lists'>
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
      {/* <Link to="/edit"><button className="editBtn" onClick={()=>onEdit(todo)}>Edit</button></Link> */}
      <button className="deleteBtn" onClick={() => onDelete(todo)}>Delete</button>
    </div>
  )
});
