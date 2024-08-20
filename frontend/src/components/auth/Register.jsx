import React, { Fragment, useRef } from 'react'
import styles from './Style.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../Icons'; // Import the icons.js file
import axios from 'axios';

function Register() {

    let navigate = useNavigate();
    let usernameInpRef = useRef();
    let emailInpRef = useRef();
    let passwordInpRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        let username = usernameInpRef.current.value;
        let email = emailInpRef.current.value;
        let password = passwordInpRef.current.value;
        try {
            let resp = axios.post('http://localhost:8080/register', { username, email, password })
            console.log("Axios Resp : ", resp);
            navigate('/');
        } catch (error) {
            console.log("Cannot register at this moment : ", error);
        }
    }

    return (
        <Fragment>

            <form onSubmit={handleSubmit}>
                <h1 className={styles.heading}>Register</h1>
                <div className={styles.cont}>
                    <label htmlFor="username"></label>
                    <FontAwesomeIcon icon="user" className={styles.icons} />
                    <input type="text" placeholder='Username' id='username' name="username" ref={usernameInpRef} required />
                </div>
                <div className={styles.cont}>
                    <label htmlFor="email"></label>
                    <FontAwesomeIcon icon="envelope" className={styles.icons} />
                    <input type="email" placeholder='E-mail' id='email' ref={emailInpRef} required />
                </div>
                <div className={styles.cont}>
                    <label htmlFor="password"></label>
                    <FontAwesomeIcon icon="lock" className={styles.icons} />
                    <input type="password" placeholder='Password' id='password' ref={passwordInpRef} required />
                </div>
                <button>Register</button>
                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>

        </Fragment>
    )
}

export default Register