import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Edit = React.memo(({updateTodo, todo }) => {
    const [title, setTitle] = useState(todo.title);
    const [desc, setDesc] = useState(todo.desc);
    const navigate = useNavigate();
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc)
        {
            alert("Title or Description cannot be blank")
            return
        }
        updateTodo(title, desc, todo.sno);
        setDesc("");
        setTitle("");
        navigate("/");
    }
    return (
      <form onSubmit={submit}>
      <label htmlFor="title"><strong>Title</strong></label>
      <input id="title" name="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter your task"></input>
      <label htmlFor="description"><strong>Description</strong></label>
      <textarea id="desc" name="description" value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="Enter description for your task"></textarea>
      <button type='submit'>Update</button>
      </form>
    )
  });

export default Edit