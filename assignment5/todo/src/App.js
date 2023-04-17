import './App.css';
import { Forms } from "./MyComponent/Forms";
import { Todos } from "./MyComponent/Todos";
import { Footer } from "./MyComponent/Footer";
// import {Edit} from "./MyComponent/Edit";
import About from "./MyComponent/About";
import Contact from "./MyComponent/Contact";
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  const onDelete = (todo) => {

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }
  const addTodo = (title, desc) => {
    let sno = todos.length + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
  }
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Router>

        <Routes>

          <Route path="/" element={
            <>
              <Forms addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          } />
          {/* <Route exact path="/edit" element={<Edit />}/> */}

          <Route exact path="/about" element={<About />} />

          <Route exact path="/contact" element={<Contact />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
