import React, { Fragment, useEffect, useState } from 'react';
import Note from './Note';
import axios from 'axios';

import styles from './Page.module.css'

function Home() {
    const [notes, setNotes] = useState([]);

    async function getNotes() {
        try {
            // console.log("Request from axios of fetching all notes");
            let resp = await axios.get('http://localhost:8080/');
            let data = resp.data;
            // console.log("From Home.jsx:", data);
            setNotes(data);
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    }

    useEffect(() => {
        getNotes();
    }, []);

    const handleDelete = (id) => {
        setNotes(notes.filter(note => note._id !== id));
    };

    return (
        <Fragment>
            <div className={styles.cards}>
                {notes.map((note) => (
                    <Note key={note._id} title={note.title} desc={note.desc} id={note._id} onDelete={handleDelete} />
                ))}
            </div>
        </Fragment >
    );
}

export default Home;
