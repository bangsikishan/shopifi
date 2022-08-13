import { createContext, useReducer,useEffect } from "react";

export const UserContext = createContext(); 

const userReducer = (state, action)=>{
    switch (action.type) {
        case "ADD_USER":
            return {user: action.payload}
        case "LOGOUT":
            return {user: null}   
        default:
            return state;
        
    }
}
const UserContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(userReducer, {
        user: null
    });
    useEffect(()=>{
        if(localStorage.getItem("user")){
            dispatch({
                type: "ADD_USER",
                payload: JSON.parse(localStorage.getItem("user"))
            })
        }
    },[])
    return ( 
        <UserContext.Provider value={{...state, dispatch}}>
            {children}
        </UserContext.Provider>
    );
}
 
export default UserContextProvider;