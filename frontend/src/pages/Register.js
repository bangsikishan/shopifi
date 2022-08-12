import { useState,useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useRegister from '../hooks/useRegister';
import styles from './Register.module.css';
import { UserContext } from '../context/userContext';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { register, error } = useRegister();
    const {dispatch} = useContext(UserContext);

    const handleSubmit = async(e) => {
        e.preventDefault();
        const user = { name, email, phone, password };

        const user1 = await register(user);
        dispatch({
            type: "ADD_USER",
            payload: user1.data
        })
        localStorage.setItem("user",JSON.stringify(user1.data));
    };

    const check = ()=>{
        if(phone.length >= 9){
            document.querySelector('#phone').innerHTML = '';
        }
        if(password.length >= 7){
            document.querySelector('#password').innerHTML = '';
        }
    }

    return (
        <div className={styles.register}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                {error.name && <div className={styles.error}>{error.name}</div>}
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                {error.email && <div className={styles.error}>{error.email}</div>}
                <label>Phone</label>
                <input type="text" value={phone} onChange={(e) => {setPhone(e.target.value); check()}} required />
                <div className={styles.error} id="phone">{error.phone}</div>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => {setPassword(e.target.value); check()}} required />
                <div className={styles.error} id="password">{error.password}</div>
                <button>Register</button>
            </form>
            <p>Already Registered?<Link to="/login"> Login!</Link></p>
        </div>
    );
};

export default Register;