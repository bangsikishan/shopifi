import { createContext, useReducer,useEffect } from "react";

export const UserContext = createContext(); 

const userReducer = (state, action)=>{
    switch (action.type) {
        case "ADD_USER":
            return {user: action.payload}
            break;
        
        default:
            return state;
            break;
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
    console.log(state);
    return ( 
        <UserContext.Provider value={{...state,dispatch}}>
            {children}
        </UserContext.Provider>
    );
}
 
export default UserContextProvider;