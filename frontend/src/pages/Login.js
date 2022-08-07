import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import styles from './Login.module.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const user = {email, password};

        axios.post('',user,{
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then((res)=>{
            navigate('/');
        })
        .catch((err)=>{
            console.log(err.message);
        })

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