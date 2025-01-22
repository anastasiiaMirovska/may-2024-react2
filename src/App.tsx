import './App.css'
import {FC, useState} from "react";
import Users from "./components/users/Users.tsx";
import {IUser} from "./models/IUser.ts";
import {ITodo} from "./models/ITodo.ts";
import {getTodosOfUser} from "./services/api.service.ts";



const App:FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    const lift = (user:IUser)=>{
        getTodosOfUser(user).then((response: ITodo[])=>{
                setTodos(response)
            })
    }
    return (

        <div>
            {
                todos.map(todo=><div key={todo.id}>{todo.title}</div>)
            }
            <hr/>
            <Users lift={lift}/>
        </div>
    )
}

export default App
