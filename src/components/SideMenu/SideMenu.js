import React from 'react';
import styles from './SideMenu.module.css';
import Panel from './Panel/Panel';

function SideMenu({handleNewDoc}) {

    const panels = [{
        src:'./assets/home-variant.png',
        text:'All projects'
    }, {
        src: './assets/account.png',
        text: 'Your projects'
    }, {
        src: './assets/account-supervisor.png',
        text: 'Shared with you'
    }, {
        src: './assets/inbox-arrow-down.png',
        text: 'Archived'
    }, {
        src: './assets/delete.png',
        text: 'Trash'
    }]
    
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                    <path d="M37.418 30.7658L30.5327 17.4529C28.8359 14.1721 24.1287 14.2164 22.4939 17.5285L15.9195 30.8489C14.0935 34.5485 17.7894 38.5519 21.6228 37.0268L24.996 35.6847C26.0546 35.2635 27.2336 35.2593 28.2953 35.6728L31.7833 37.0312C35.6515 38.5378 39.325 34.4531 37.418 30.7658Z" fill="#34347B"/>
                    <rect width="9.49422" height="39.0428" rx="4.74711" transform="matrix(-0.924365 -0.381509 -0.444491 0.895783 26.1303 4.26224)" fill="#34347B"/>
                </svg>
                <p>ARO</p>
            </div>
            <div className={styles.menu}>
                {panels.map((obj) => {
                    return <Panel src={obj.src} text={obj.text} />
                })}
            </div>
            <div className={styles.new_doc}>
                <button type='submit' onClick={handleNewDoc}>+ New</button>
            </div>
        </div>
    );
}

export default SideMenu;