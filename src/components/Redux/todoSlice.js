import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    items:[],
    status:'idle',
    error:null
}

export const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.items.push({
                id:Date.now(),
                text:action.payload,
                completed:false
            })
        },
        tooggleTodo:(state,action)=>{
            const todo = state.items.find(todo => todo.id === action.payload)
            if(todo){
                todo.completed = !todo.completed
            }
        },
        removeTodo: (state, action) => {
            state.items = state.items.filter(todo => todo.id !== action.payload)
          }
    }
})

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer