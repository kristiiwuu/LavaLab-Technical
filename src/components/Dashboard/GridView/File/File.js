import React from 'react';
import styles from './File.module.css';

function File({ title, timestamp }) {

    console.log(timestamp);
    return (
        <div className={styles.container}>
            <div className={styles.display}>
                <img src='./assets/file-document.png' />
            </div>
            <div className={styles.text}>
                <p>{title}</p>
                <div className={styles.timestamp}>
                    <p>{timestamp === undefined ? '0' : `${timestamp}`}m ago</p>
                </div>
            </div>
        </div>
    );
}

export default File; 