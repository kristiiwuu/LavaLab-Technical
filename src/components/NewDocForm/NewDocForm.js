import React, {useState } from "react";
import styles from './NewDocForm.module.css';


function NewDocForm({ onSubmit }) {

    const [title, setTitle] = useState('Untitled Document');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(title); // send title to parent
        setTitle('Untitled Document'); // set back to default name after submitting
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Add Document Title'></input>
                <button type='submit'>Create</button>   
            </form> 
        </div>
    );
}

export default NewDocForm;