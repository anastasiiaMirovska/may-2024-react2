import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser.ts";
import User from "../user/User.tsx";
import {getUsers} from "../../services/api.service.ts";

interface IUsersProps{
    lift:(user:IUser)=>void
}

const Users:FC<IUsersProps> = ({lift}) => {
    const [users, setUsers] = useState<IUser[]>([])  ;
    useEffect(() => {
            getUsers().then((value: IUser[]) => {
                setUsers(value)
                console.log(users)
            })
    }, []);
    return (
        <div>
            {
                users.map((user:IUser)=> <User key={user.id} lift={lift} user={user} ></User>)
            }
        </div>
    );
};

export default Users;
