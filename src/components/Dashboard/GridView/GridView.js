import React, {useState, useEffect } from 'react';
import styles from './GridView.module.css';
import File from './File/File.js'

function GridView({ docs }) {
    const [minPassed, setMinPassed] = useState([]);

    useEffect(()=> {
        const interval = setInterval(()=> {
            const now = new Date(); // current time
            const newMinPassed = docs.map( (doc) => { // array of updated time stamps
                const minutes = Math.floor((now - new Date(doc.timestamp)) / 60000);
                return minutes;
            });
            setMinPassed(newMinPassed); // update time elapsed 
        }, 60000) // will update every minute 

        return () => clearInterval(interval); // clean up when component unmounts
    }, [docs]) // dependency array; do this every time a new doc is added

    return (
        <div className={styles.container}>
            {docs.map((obj, index) => {
                return (
                    <File title={obj.title} timestamp={minPassed[index]}/>
                );
            })}
        </div>
    );
}

export default GridView;