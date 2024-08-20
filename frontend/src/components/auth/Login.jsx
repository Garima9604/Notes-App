import React from 'react'
import styles from './Style.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../Icons'; // Import the icons.js file

function Login() {
    return (
        <>

            <form>
                <h1 className={styles.heading}>Login</h1>
                <div className={styles.cont}>
                    <label htmlFor="username"></label>
                    <FontAwesomeIcon icon="user" className={styles.icons} />
                    <input type="text" placeholder='Username' id='username' required />
                </div>
                <div className={styles.cont}>
                    <label htmlFor="password"></label>
                    <FontAwesomeIcon icon="lock" className={styles.icons} />
                    <input type="password" placeholder='Password' id='password' required />
                </div>
                <button>Login</button>
                <Link to="/register">Create New Account</Link>
            </form>

        </>
    )
}

export default Login