import { useDispatch,useSelector } from 'react-redux'; 
import { increment,decrement,incrementByAmount } from '../components/Redux/counterSlice';
import { addTodo,toggleTodo } from '../components/Redux/todoSlice';

const Redux = ()=>{
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value)
    const todos = useSelector((state) => state.todos.items)
    const status = useSelector((state) => state.todos.status)

return(
    <div className="w-[100vw] h-[100vh]">
       <h1 className="text-2xl font-semibold text-center">Redux state Management</h1>

       <div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Increment By Amount
        </button>
      </div>

      <div>
        <button onClick={() => dispatch(fetchTodos())}>Load Todos</button>
        <button onClick={() => dispatch(addTodo('New Todo'))}>Add Todo</button>
        {status === 'loading' ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {todos.map(todo => (
              <li
                key={todo.id}
                onClick={() => dispatch(toggleTodo(todo.id))}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              >
                {todo.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    </div>
)
}

export default Redux;