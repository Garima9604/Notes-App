// import React, { useEffect, useState } from 'react';
// import styles from './Page.module.css';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';

// function Show() {
//     let [note, setNote] = useState({ title: '', desc: '' });
//     const params = useParams();
//     async function fetchNotes() {
//         let resp = await axios.get(`http://localhost:8080/note/${params.id}`);
//         console.log("Mil gya Note in show.jsx : ", resp);
//         let { title, desc } = resp.data;
//         console.log("Frontend Show.jsx : ", title, desc);
//         setNote({ title, desc });
//     }
//     useEffect(() => { fetchNotes() }, [])

//     // back
//     let navigate = useNavigate();

//     function backToHome() {
//         navigate('/')
//     }
//     return (
//         <div className={styles.back}>
//             <div className={styles.content}>
//                 <div>
//                     <h2>{note.title}</h2>
//                 </div>
//                 <hr />
//                 <div className={styles.details}>
//                     <h4>{note.desc}</h4>
//                 </div>
//                 <hr />
//             </div>
//         </div>
//     )
// }

// export default Show


// Pop-Up Form 

import React from 'react';
import styles from './Page.module.css';

function Show({ note, onClose }) {
    if (!note) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <h2>{note.title}</h2>
                <hr />
                <pre>{note.description}</pre>
            </div>
        </div>
    );
}

export default Show;
