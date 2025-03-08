import React, { useEffect, useState } from 'react'

import styles from './Page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../Icons'; // Import the icons.js file
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Edit(props) {
    const params = useParams();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    async function editNotes() {
        const resp = await axios.get(`http://localhost:8080/note/${params.id}`);
        // console.log("Frontend Resp Edit.jsx : ", resp);
        setName(resp.data.title);
        setDescription(resp.data.desc);
    }
    useEffect(() => { editNotes() }, [])

    const handleEdit = async (e) => {
        try {
            e.preventDefault();
            const resp = await axios.patch(`http://localhost:8080/edit/${params.id}`, {
                title: name,
                desc: description
            });
            // console.log("Frontendin axios.post Edit.jsx : ", resp);
            navigate('/');
        } catch (e) {
            console.log("Error in Editing Notes in Frontend : ", e);
        }
    }

    // back to home
    function backToHome() {
        navigate('/')
    }

    return (
        <>
            <form onSubmit={handleEdit}>
                <FontAwesomeIcon icon="fa-solid fa-arrow-left" className={styles.back} onClick={backToHome} />
                <h1 className={styles.heading}>Edit Topic</h1>
                <div className={styles.cont}>
                    <label htmlFor="tname"></label>
                    <FontAwesomeIcon icon="notes-medical" className={styles.icons} />
                    <input type="text" placeholder="Topic Name" id="tname" value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className={styles.cont}>
                    <label htmlFor="desc"></label>
                    <FontAwesomeIcon icon="file-alt" className={styles.icons} />
                    <textarea placeholder="Description" id="desc" cols="40" rows="5" value={description} onChange={(e) => { setDescription(e.currentTarget.value) }}></textarea>
                </div>
                <button>Save</button>
            </form>
        </>
    )
}

export default Edit