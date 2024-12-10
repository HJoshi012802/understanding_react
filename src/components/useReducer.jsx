// import { useReducer } from "react";

// const counterReducer = (state, action) => {
//     switch (action.type) {
//       case 'INCREMENT':
//         return { count: state.count + 1 }
//       case 'DECREMENT':
//         return { count: state.count - 1 }
//       case 'RESET':
//         return { count: 0 }
//       case 'ADD':
//         return { count: state.count + action.payload }
//       default:
//         return state
//     }
//   }

// function UseReducer (){
//     const [state,dispatch] = useReducer(counterReducer,{count:0});
// return(
//     <div className="pt-[100px] flex justify-center">
//         <h1>Understanding useReducer</h1>
//        <div>
//        <p>Count: {state.count}</p>
//       <button  className="bg-yellow-500 text-white px-4 py-2 rounded mt-2" onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
//       <button  className="bg-blue-500 text-white px-4 py-2 rounded mt-2" onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
//       <button  className="bg-red-500 text-white px-4 py-2 rounded mt-2" onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
//       <button  className="bg-purple-500 text-white px-4 py-2 rounded mt-2" onClick={() => dispatch({ type: 'ADD', payload: 9 })}>Add 9</button>
//       </div>
//       <div>

//       </div>
       
//     </div>
// )
// }

// export default UseReducer;

import { useReducer } from "react";

const todoReducer = (state,action) =>{
    switch(action.type){
        case 'ADD_TODO' :
            return{
                ...state,
                todos:[...state.todos,{
                    id: Date.now(),
                    text:action.payload,
                    completed:false
                }]
            }
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                  todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
                )
              }
            case 'DELETE_TODO':
                return {
                  ...state,
                  todos: state.todos.filter(todo => todo.id !== action.payload)
                }
              case 'CLEAR_COMPLETED':
                return {
                  ...state,
                  todos: state.todos.filter(todo => !todo.completed)
                }
              default:
                return state
            }

}

function UseReducer (){
    const [state,dispatch] = useReducer(todoReducer,{ todos:[] });

    const addTodo = (text) => {
        dispatch({ type: 'ADD_TODO', payload: text })
      }

return(
    <div className="pt-[100px] flex justify-center">
        <h1>Understanding useReducer</h1>
        <div>
      <input
        type="text"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            addTodo(e.target.value)
            e.target.value = ''
          }
        }}
      />
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}>
        Clear Completed
      </button>
    </div>
        
    </div>
)
}

export default UseReducer;