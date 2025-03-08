import React, { Fragment, useState } from 'react'
import styles from './Page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../Icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

import Show from './Show'

function Note(props) {
    let navigate = useNavigate();

    // open note
    // const openNote = (id) => {
    //     navigate(`/note/${id}`)
    // }

    const [isOpen, setIsOpen] = useState(false);
    const openNote = () => {
        setIsOpen(true);
    };

    const closeNote = () => {
        setIsOpen(false);
    };

    // edit note
    const editNote = (id) => {
        navigate(`/edit/${id}`)
    }

    // delete note
    const deleteNote = async (id) => {
        try {
            const resp = await axios.delete(`http://localhost:8080/delete/${id}`);
            // console.log("Deleting a note from frontend : ", resp);
            props.onDelete(id);
            navigate('/');
        } catch (e) {
            console.log('Error deleting Note from Frontend :', e);
        }
    }

    return (
        <Fragment>
            {/* <div className={styles.cards}> */}
            <div className={styles.card}>
                <div>
                    <h2>{props.title}</h2>
                </div>
                <hr />
                <div className={styles.details}>
                    <h4>{props.desc}</h4>
                </div>
                <hr />
                <div className={styles.foot}>
                    <button className={styles.btn} onClick={openNote}>
                        {/* <button className={styles.btn} onClick={() => openNote(props.id)}> */}
                        <FontAwesomeIcon icon="fa-brands fa-readme" className={styles.icon} />
                    </button>
                    <button className={styles.btn} onClick={() => editNote(props.id)}>
                        <FontAwesomeIcon icon="pen-to-square" className={styles.icon} />
                    </button>
                    <button className={styles.btn} onClick={() => deleteNote(props.id)}>
                        <FontAwesomeIcon icon="trash" className={styles.icon} />
                    </button>
                </div>
            </div>
            {/* </div> */}

            {isOpen && (
                <Show
                    note={{
                        title: props.title,
                        description: props.desc
                    }}
                    onClose={closeNote}
                />
            )}
        </Fragment>
    )
}

export default Note