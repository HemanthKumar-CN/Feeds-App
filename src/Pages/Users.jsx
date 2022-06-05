 import React, { useContext, useEffect, useState } from 'react'
 import axios from 'axios'
import { Link, Navigate, useSearchParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
 
 const Users = () => {

    const [data, setData] = useState([])
    const [isAuth] = useContext(AppContext);
    const [searchParams, setSearchParams]=useSearchParams();
    const [page, setPage] = useState( Number(searchParams.get("page"))|| 1)
    

    useEffect(() => {

        setSearchParams({
            page
        })

        async function getRequest() {
            let res=await axios.get(`https://reqres.in/api/users?page=${page}`);
            let d=res.data;
            // console.log(d.data)
            setData(d.data)
        }
        
        getRequest()
      
    }, [page])

    // if(!isAuth)
    // {
    //     return <Navigate to="/login" />
    // }
    

   return (
     <div>
         <br />
         <br />
         <div>
             
             <button disabled={page==1} onClick={()=> setPage(1)}>1</button>
             <button disabled={page==2} onClick={()=> setPage(2)}>2</button>
             
         </div>
         {
             data.map(item=> (
                 <div key={item.id}> 
                    <img src={item.avatar} width="100px" alt="img" /> 
                    <div>Name: {item.first_name}{" "} {item.last_name} </div>
                    <Link to={`/users/${item.id}`}>See More</Link>
                    <br />
                </div>
             ))
         }
         
     </div>
   )
 }
 
 export default Users