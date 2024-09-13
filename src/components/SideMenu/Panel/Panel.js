import React from 'react';
import styles from './Panel.module.css';

function Panel({ src, text }) {
    return (
        <div className={styles.container}>
            <img src= {src} key={text}/>
            <p>{text}</p>
        </div>
    );
}

export default Panel;