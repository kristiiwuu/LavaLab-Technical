import React from 'react';
import styles from './GridView.module.css';
import File from './File/File.js'

function GridView() {
    return (
        <div className={styles.container}>
            <File />
            <File />
            <File />
            <File />
            <File />
            <File />
        </div>
    );
}

export default GridView;