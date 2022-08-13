import { useContext } from "react";
import { UserContext } from "../context/userContext";

const useLogout = () => {
    const { dispatch } = useContext(UserContext);

    const logout = () => {
        localStorage.removeItem("user");
        dispatch({
            type: "LOGOUT"
        })
    }
    return {logout};

}
 
export default useLogout;