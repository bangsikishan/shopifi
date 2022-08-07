import { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useRegister from '../hooks/useRegister';
import styles from './Register.module.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {register} = useRegister();

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(name, email, phone, password);
        const user = {name, email, phone, password};

        register(user);
        // axios.post('',user,{
        //     headers:{
        //         "Content-Type": "application/json"
        //     }
        // })
        // .then((res)=>{
        //     navigate('/');
        // })
        // .catch((err)=>{
        //     console.log(err.message);
        // })

        

    }

    return ( 
        <div className={styles.register}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                <div className={styles.error}></div>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <div className={styles.error}></div>
                <label>Phone</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
                <div className={styles.error}></div>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <div className={styles.error}></div>
                <button>Register</button>
            </form>
            <p>Already Registered?<Link to="/login"> Login!</Link></p>
        </div>
     );
}
 
export default Register;