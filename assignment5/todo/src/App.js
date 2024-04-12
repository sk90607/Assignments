import './App.css';
import { Forms } from "./MyComponent/Forms";
import { Todos } from "./MyComponent/Todos";
import { Footer } from "./MyComponent/Footer";
import Edit from "./MyComponent/Edit";
import About from "./MyComponent/About";
import Contact from "./MyComponent/Contact";
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({});

  const onDelete = (todo) => {

    setTodos(todos.filter((element) => {
      return element!== todo;
    }))
  }
  const addTodo = (title, desc) => {
    let sno = todos.length + 1
    const myTodo = {
      sno,
      title,
      desc,
    }
    setTodos([...todos, myTodo]);
  }
  const onEdit = (todo) =>{
    setTodo(todo)
  }
  const updateTodo = (title, desc, sno = null) => {
    const myTodo = {
      sno,
      title,
      desc,
    }
    todos[sno - 1] = myTodo
    setTodos([...todos]);
  }
  return (
    <>
      <Router>

        <Routes>

          <Route path="/" element={
            <>
              <Forms addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} onEdit={onEdit}/>
            </>
          } />
          <Route exact path="/edit" element={<Edit updateTodo={updateTodo} todo={todo}/>}/>

          <Route exact path="/about" element={<About />} />

          <Route exact path="/contact" element={<Contact />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
