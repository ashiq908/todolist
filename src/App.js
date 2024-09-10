import { useState } from 'react';
import './App.css';

const App=()=>{
    const [input,setInput]=useState('')
    const [todos,setTodos]=useState([])
    const addTodo=()=>{
        if(input!=='')
        {setTodos([...todos,input]);
        setInput('');}
    }
    const editTodo=(upTodo,id)=>{
        const updTodo=todos.map((todo,index)=>(
            index===id ? upTodo:todo
        ));
        setTodos(updTodo);
    }
    const deleTodo=(id)=>{
        setTodos(todos.filter((todo,index)=>index!==id));
    }
    return (
        <div className='App'>
            <h1>To-do App</h1>
            <input
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            placeholder='To-do'
            maxLength={10}
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo,id)=>(
                    <li key={id}>
                        {todo}
                         <button onClick={()=>editTodo(id)}>Edit</button>
                        <button onClick={()=>deleTodo(id)}>Delete</button>
                        </li>
                )
                )}
            </ul>
            </div>
    );
}

export default App;