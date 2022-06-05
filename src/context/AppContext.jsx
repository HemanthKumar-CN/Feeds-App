import React, { Children, createContext, useReducer, useState } from "react";

export const AppContext=createContext();

const initstate= {
    isAuth: false,
    token: null
}

function reducer (state,action)
{
    switch(action.type)
    {
        case "Login_Success": {
            return {
                ...state,
                isAuth: true,
                token: action.token
            }
        }
        case "Logout_Success": {
            return {
                ...state,
                isAuth: false,
                token: null
            }
        }
        case "Login_Failure": {
            return {
                ...state,
                isAuth: false,
                token: null
            }
        }
        default:{
            return state;
        }
    }
}


export const AppContextProvider=({children})=> {
    const [isAuth, setIsAuth] = useState(false)
    const [state, dispatch] = useReducer(reducer,initstate)

    const toggleAuth=()=> {
        setIsAuth(!isAuth)
    }
    console.log(state)
    return <AppContext.Provider value={[state,dispatch]} >
        {children}
    </AppContext.Provider>
}