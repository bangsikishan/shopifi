import { useState } from "react";
import axios from "axios";

const useLogin = () => {
    const [error, setError] = useState({});
    const login = async (user) => {
        try {
            setError({});
            const response = await axios.post('login', user, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return response;
        } catch (error) {
            console.log(error);
            // const _error = {};
            // if (error.response) {
            //     error.response.data.details.forEach(err => {
            //         const key = err.message.split(" ")[0].slice(1, -1);
            //         _error[key] = err.message;
            //     });
            // }
            // setError(_error);
        }
    };
    return { login, error };

};

export default useLogin;