import React from 'react';
import styles from './File.module.css';

function File({ title, timestamp }) {
    const handleFileSelect = () => {
        
    };
    
    return (
        <div className={styles.container} onClick={handleFileSelect}>
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