import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link, Navigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const UserPage = () => {

   const [data, setData] = useState({})
   const [isAuth] = useContext(AppContext);

   const params=useParams();



   useEffect(() => {
       async function getRequest() {
           let res=await axios.get(`https://reqres.in/api/users/${params.id}`);
           let d=res.data;
        //    console.log(d)
           setData(d.data)
       }
       
       getRequest()
     
   }, [])

   // if(!isAuth)
   // {
   //     return <Navigate to="/login" />
   // }
   
   console.log(data)

  return (
    <div>
        <img src={data.avatar} width="100px" alt="" />
        <div>{data.first_name} {" "} {data.last_name} </div>
        <div>{data.email}</div>
        
    </div>
  )
}

export default UserPage