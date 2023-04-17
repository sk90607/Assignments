import './App.css';
// import { useReducer } from 'react';
import {useSelector, useDispatch} from "react-redux";
import { incNumber, decNumber } from './actions/actions';
// const initialState = 0;
// const reducer = (state, action) => {
//   // console.log(state,action);
//   // if(action.type === "Increment")
// 	//   return state+1;
//   // if(action.type === "Decrement")
// 	//   return state-1;
//   switch (action.type) {
//     case 'Increment':
//       return state+1;
//     case 'Decrement':
//       return state-1;

//     default:
//       break;
//   }
// }

function App() {
  // const [count,setCount]=useState(0);

  // const [state, dispatch] = useReducer(reducer,initialState);

  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={()=>dispatch({type: "Increment"})}>+</button>
        <p>Count:{myState}</p>
        <button onClick={()=>dispatch({type: "Decrement"})}>-</button> */}
        <button onClick={()=>dispatch(incNumber())}>+</button>
        <p>Count:{myState}</p>
        <button onClick={()=>dispatch(decNumber())}>-</button>
      </header>
    </div>
  );
}

export default App;
