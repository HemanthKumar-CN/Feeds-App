import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [state,dispatch] = useContext(AppContext)


    function handlesubmit(e) {
        e.preventDefault();
        // console.log(username,password)

        async function mkPst() {

            try {
                let data = { "email": username, "password": password }
                let res = await axios.post(`https://reqres.in/api/login`, data)
                let d = res.data;
                // console.log(d.token)
                // toggleAuth()

                dispatch({
                    type: "Login_Success",
                    token: d.token
                })
            } 
            catch (error) {
                console.log(error.response.data.error)
            }
        }

        mkPst()

    }
    // console.log(isAuth)

    if(state.isAuth)
    {
        return <Navigate to="/users"/>
    }
    return (
        <div>
            <h1>Login</h1>
            <form action="" onSubmit={handlesubmit}>
                <div><input type="text" placeholder='username' onChange={(e) => { setUsername(e.target.value) }} value={username} /></div>
                <div><input type="text" placeholder='password' onChange={(e) => { setPassword(e.target.value) }} value={password} /></div>
                <div><input type="submit" /></div>
            </form>
        </div>
    )
}

export default Login