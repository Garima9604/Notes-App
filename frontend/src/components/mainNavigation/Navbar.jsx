import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>
                {/* <div> */}
                <h1>Welcome ! User</h1>
                {/* </div> */}
                <div>
                    <Link to="/new">Add Notes</Link>
                    <h1>Notes-Taking App</h1>
                </div>

            </nav>
        </>
    )
}

export default Navbar