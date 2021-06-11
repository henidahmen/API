import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
   

const UserList = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
       fetch("https://jsonplaceholder.typicode.com/users/")
       .then((response) => response.json()) 
       .then((json) => {
         setUsers(json);
         
     })
    }, [])

    
    return (
        <div className='d-flex justify-content-around flex-wrap'>
             {
          users.map(user => <UserCard user={user}/>)
      }
            
        </div>
    )
}

export default UserList
