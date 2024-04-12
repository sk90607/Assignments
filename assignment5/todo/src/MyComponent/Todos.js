import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <div>
      <h1><u>Todos List</u></h1>
      {props?.todos?.length === 0 ? "No Todos to Display" :
        props?.todos?.map((todo) => {
          return <TodoItem todo={todo} key={todo?.sno} onDelete={props?.onDelete} onEdit={props?.onEdit} />
        })
      }


    </div>
  )
}
