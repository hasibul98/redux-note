import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from './userSlice';
import UserList from './UserList';




export default function UserAddComponent() {
       const [name, setName] = useState('');
       const dispatch = useDispatch();
       const handleAddUser = ()=>{
              if(name){
                     dispatch(addUser({id: Date.now(), name:name}));
                     setName('');
              }
       }

  return (
    <div>
              <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter name' />

              <button onClick={handleAddUser}>Add User</button>
              <br/>
              <UserList />
    </div>
  )
}


