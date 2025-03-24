import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from './userSlice';

function UserList() {
       const users = useSelector((state)=>state.useradd.list);
       const dispatch = useDispatch();
  return (
    <div>
             <ul>
                     {
                            users.map((user)=>(
                            <li key={user.id}>
                                   {user.name} <button onClick={()=>dispatch(removeUser(user.id))}>Remove user</button>
                                   
                                   </li>
                     ))
                     }
             </ul>
    </div>
  )
}

export default UserList