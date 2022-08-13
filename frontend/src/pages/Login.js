import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import {UserContext} from '../context/userContext';
import useLogin from '../hooks/useLogin';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {login} = useLogin();
    const {dispatch} = useContext(UserContext);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const user = {email, password};
        const res = await login(user);
        dispatch({
            type: "ADD_USER",
            payload: res.data
        })
        localStorage.setItem("user", JSON.stringify(res.data));
    }

    return (
        <div className={styles.login}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>Email</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} required />
                <div className={styles.error}></div>
                <label>Password</label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} required />
                <div className={styles.error}></div>
                <button>Login</button>
            </form>
            <p>Have not registered yet! <Link to="/register"> Register Now!</Link></p>
        </div>
    );
}
 
export default Login;