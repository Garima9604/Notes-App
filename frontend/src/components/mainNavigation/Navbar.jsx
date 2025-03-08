import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import axios from 'axios';

function Navbar() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function checkUser() {
            try {
                const response = await axios.get('http://localhost:8080/api/check-auth', { withCredentials: true });
                setUser(response.data.user);
            } catch (err) {
                setUser(null);
            }
        }
        checkUser();
    }, []);

    const handleLogout = async () => {
        await axios.post('http://localhost:8080/api/logout', {}, { withCredentials: true });
        setUser(null);
    };
    return (
        <>
            <nav className={styles.navbar}>
                {/* <h1>Welcome ! User</h1> */}
                {user ? (
                    <>
                        <h1>Welcome {user.username}</h1>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
                <div>
                    {/* <Link to="/login">Login/Register</Link> */}
                    <Link to="/new">Add Notes</Link>
                    <h1>Notes-Taking App</h1>
                </div>

            </nav>
        </>
    )
}

export default Navbar