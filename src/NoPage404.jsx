import React, { useEffect } from 'react';
import axios from 'axios'; // Import Axios


const NoPage404 = () => {

  useEffect(()=>{
  const getUsers =async ()=>{
    try {
       const response = await axios.get(`http://localhost:8000/api/users`)
       console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  getUsers()
  },[])

  
  return (
    <div>NoPage404</div>
  )
}

export default NoPage404