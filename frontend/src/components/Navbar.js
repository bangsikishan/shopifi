import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../context/userContext';
import useLogout from '../hooks/useLogout';

import styles from './Navbar.module.css';

const Navbar = () => {
    const { user } = useContext(UserContext);
    const {logout} = useLogout();

    return ( 
        <nav>
            <h2>
                <Link to='/'>Shopify</Link>
            </h2>
            <ul className={styles['nav-list']}>
                {user && (<>
                    <li className={styles.name}>{user.name}</li>
                    <li><Link to="/logout" onClick={logout}>Logout</Link></li>
                </>)}
                {!user && (<>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </>)
                }
            </ul>
        </nav>
    );
}
 
export default Navbar;