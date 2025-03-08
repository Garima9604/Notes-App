import React, { Fragment, useRef } from 'react'

import styles from './Page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../Icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function New() {
    const tnameInpRef = useRef();
    const descInpRef = useRef();
    let navigate = useNavigate();
    const addNote = async (e) => {
        e.preventDefault();
        const title = tnameInpRef.current.value;
        const desc = descInpRef.current.value;
        try {
            let resp = await axios.post('http://localhost:8080/new', { title, desc });
            // console.log("Axios Resp from NewQuote.jsx : ", resp);
            navigate('/');
        } catch (error) {
            console.log("Cannot add New Note at this moment", error);
        }
        console.log("Details new.jsx : ", tnameInpRef, descInpRef);
    }

    // back to home
    function backToHome() {
        navigate('/')
    }

    return (
        <Fragment>
            <form onSubmit={addNote}>
                <FontAwesomeIcon icon="fa-solid fa-arrow-left" className={styles.back} onClick={backToHome} />
                <h1 className={styles.heading}>Add new Topic</h1>
                <div className={styles.cont}>
                    <label htmlFor="tname"></label>
                    <FontAwesomeIcon icon="notes-medical" className={styles.icons} />
                    <input ref={tnameInpRef} type="text" placeholder="Topic Name" id="tname" name="tname" />
                </div>
                <div className={styles.cont}>
                    <label htmlFor="desc"></label>
                    <FontAwesomeIcon icon="file-alt" className={styles.icons} />
                    <textarea ref={descInpRef} placeholder="Description" id="desc" cols="40" rows="5"></textarea>
                </div>
                <button>Add Notes</button>
            </form>
        </Fragment>
    )
}

export default New