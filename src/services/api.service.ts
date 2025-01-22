// import {IUser} from "../models/IUser.ts";
// import {ITodo} from "../models/ITodo.ts";


import axios from "axios";
import {IUser} from "../models/IUser.ts";
import {ITodo} from "../models/ITodo.ts";


const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {"Content-Type": "application/json"}
})

axiosInstance.interceptors.request.use((xxx)=>{
    if (xxx.method ==='get'){
        xxx.headers.set('nnn', 'sadfdsfda');
    }
    return xxx;
})

export const getUsers = async():Promise<IUser[]> =>{
    const axiosResponse = await axiosInstance.get<IUser[]>("/users");
    return axiosResponse.data;
}

export const getTodosOfUser = async(user: IUser[]): Promise<ITodo>=>{
    const axiosResponse = await axiosInstance.get<ITodo[]>('/todos', {
        params:{
            userId: user.id
        }
    })
    return axiosResponse.data
}

// export const getUsers = async():Promise<IUser[]>=>{
//     const response:IUser[] = await fetch('https://jsonplaceholder.typicode.com/users')
//             .then(value => value.json());
//
//     return response
// }
//
// export const getTodosOfUser = async(user: IUser): Promise<ITodo[]>=>{
//     const response: ITodo[] = await fetch('https://jsonplaceholder.typicode.com/todos?userId='+user.id)
//         .then(value => value.json())
//     return response
// }
