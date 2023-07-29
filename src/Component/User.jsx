import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const User = () => {
    const [user, setUser] = useState([])
    const fetcher = ()=>{
        fetch ("http://localhost:4000/api/v1/getAllUsers")
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data);
            setUser(data.data)
        })
        
    }
    useEffect(()=>{
        fetcher()
    },[])
    console.log(user);
  return (
    <div>
{

}

    </div>
  )
}

export default User