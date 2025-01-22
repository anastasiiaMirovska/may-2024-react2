import React, {FC} from 'react';
import {IUser} from "../../models/IUser.ts";
interface IUserProps{
    user: IUser;
    lift: (user:IUser)=>void
}

const User:FC<IUserProps> = ({user, lift}) => {
    const {name, username, email} = user
    return (
        <div>
            <p>Name: {name} Username: {username} Email: {email}</p>
            <button onClick={()=>{
                lift(user)
            }}>Click</button>
        </div>
    );
};

export default User;
