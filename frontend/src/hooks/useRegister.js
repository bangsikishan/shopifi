import { useState } from "react";
import axios from "axios";

const useRegister = () => {
    const [error, setError] = useState({});
    const register = async (user) => {
        try {
            setError({});
            const response = await axios.post('register', user, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return response;
        } catch (error) {
            const _error = {};
            if (error.response) {
                error.response.data.details.forEach(err => {
                    const key = err.message.split(" ")[0].slice(1, -1);
                    _error[key] = err.message;
                });
            }
            setError(_error);
        }
    };
    return { register, error };

};

export default useRegister;