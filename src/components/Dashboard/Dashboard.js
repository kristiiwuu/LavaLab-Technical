import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import GridView from './GridView/GridView';
import ListView from './ListView/ListView';

function Dashboard({ docs }) {
    const [toggleView, setToggleView] = useState(true); // T = grid; F = list

    const handleGridView = () => {
        setToggleView(true);
    };

    const handleListView = () => {
        setToggleView(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p>All Projects</p>
                <div className={styles.icons}>
                    <img onClick={handleGridView} className={styles.icon1} src={process.env.PUBLIC_URL + '/assets/view-grid.png'}/>
                    <img onClick={handleListView} className={styles.icon2} src={process.env.PUBLIC_URL + '/assets/list-view.png'}/>
                </div>
            </div>
            <div className={styles.files}>
                {toggleView && <GridView docs={docs}/>}
                {!toggleView && <ListView docs={docs}/>}
            </div>
        </div>
    );

}

export default Dashboard;