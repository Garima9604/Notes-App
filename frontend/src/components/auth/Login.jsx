import React, { useRef } from 'react'
import styles from './Style.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../Icons'; // Import the icons.js file
import axios from 'axios';

function Login() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        try {
            const response = await axios.post('http://localhost:8080/api/login', { username, password }, { withCredentials: true });
            console.log("Response: ", response.data);
            navigate('/');
        } catch (err) {
            console.error("Login Error: ", err.response.data.msg);
        }
    };
    return (
        <>

            <form onSubmit={handleSubmit}>
                <h1 className={styles.heading}>Login</h1>
                <div className={styles.cont}>
                    <label htmlFor="username"></label>
                    <FontAwesomeIcon icon="user" className={styles.icons} />
                    <input type="text" placeholder='Username' id='username' name="username" ref={usernameRef} required />
                </div>
                <div className={styles.cont}>
                    <label htmlFor="password"></label>
                    <FontAwesomeIcon icon="lock" className={styles.icons} />
                    <input type="password" placeholder='Password' id='password' name="username" ref={passwordRef} required />
                </div>
                <button>Login</button>
                <Link to="/register">Create New Account</Link>
            </form>

        </>
    )
}

export default Login