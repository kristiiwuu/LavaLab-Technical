import React from 'react';
import styles from './Dashboard.module.css';
import GridView from './GridView/GridView';

function Dashboard() {


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p>All Projects</p>
                <div className={styles.icons}>
                    <img className={styles.icon1} src='./assets/view-grid.png'/>
                    <img className={styles.icon2} src='./assets/list-view.png'/>
                </div>
            </div>
            <div className={styles.files}>
                <GridView />
            </div>
        </div>
    );

}

export default Dashboard;