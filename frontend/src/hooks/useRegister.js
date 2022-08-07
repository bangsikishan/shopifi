import { useState } from "react";
import axios from "axios";

const useRegister = () => {
    const register = async(user)=> {
        try {
            const response = await axios.post('/register', user, {
                headers:{
                    "Content-Type": "application/json"
                }
            });
            console.log(response);
            if(!response.status === 200) {
                throw new Error('Could not register');
            }
        } catch (error) {
            console.log(error.message);
        }
        
    }
    return {register};
    
}
 
export default useRegister;