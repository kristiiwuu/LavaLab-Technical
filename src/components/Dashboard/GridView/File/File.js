import React from 'react';
import styles from './File.module.css';

function File() {
    return (
        <div className={styles.container}>
            <div className={styles.display}>
                <img src='./assets/file-document.png' />
            </div>
            <div className={styles.text}>
                <p>Assignment 1</p>
                <div className={styles.timestamp}>
                    <p>1m ago</p>
                </div>
            </div>
        </div>
    );
}

export default File; 