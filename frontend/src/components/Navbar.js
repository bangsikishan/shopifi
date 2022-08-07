import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar = () => {
    return ( 
        <nav>
            <h2>
                <Link to='/'>Shopify</Link>
            </h2>
            <ul className={styles['nav-list']}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </nav>
    );
}
 
export default Navbar;