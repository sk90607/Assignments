import React from 'react'
import { useState } from 'react';

export const Forms = React.memo((props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e)=>{
      e.preventDefault();
      if(!title || !desc)
      {
          alert("Title or Description cannot be blank")
          return
      }
      props.addTodo(title,desc);
      setDesc("");
      setTitle("");
  }
  return (
    <form onSubmit={submit}>
    <label htmlFor="title"><strong>Title</strong></label>
    <input id="title" name="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter your task"></input>
    <label htmlFor="description"><strong>Description</strong></label>
    <textarea id="desc" name="description" value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="Enter description for your task"></textarea>
    <button type='submit'>Add</button>
    </form>
  )
});
