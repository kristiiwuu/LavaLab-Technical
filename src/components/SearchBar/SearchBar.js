import React from 'react';
import styles from './SearchBar.module.css';

function SearchBar() {

    return (
        <div className={styles.container}>
            <div className={styles.searchbar_container}>
                <div className={styles.frame135}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M9.5 3.5C11.2239 3.5 12.8772 4.18482 14.0962 5.40381C15.3152 6.62279 16 8.27609 16 10C16 11.61 15.41 13.09 14.44 14.23L14.71 14.5H15.5L20.5 19.5L19 21L14 16V15.21L13.73 14.94C12.59 15.91 11.11 16.5 9.5 16.5C7.77609 16.5 6.12279 15.8152 4.90381 14.5962C3.68482 13.3772 3 11.7239 3 10C3 8.27609 3.68482 6.62279 4.90381 5.40381C6.12279 4.18482 7.77609 3.5 9.5 3.5ZM9.5 5.5C7 5.5 5 7.5 5 10C5 12.5 7 14.5 9.5 14.5C12 14.5 14 12.5 14 10C14 7.5 12 5.5 9.5 5.5Z" fill="#737373"/>
                    </svg>
                    <input className={styles.search} placeholder='Search in Aro'></input>
                </div>
            </div>
            <div className={styles.user}>
                <div className={styles.icon}>
                    {/* <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle id="Ellipse 8" cx="22" cy="22.5" r="22" fill="#414172"/>
                    </svg> */}
                    <p>C</p>
                </div>
                <div className={styles.info}>
                    <p className={styles.name}>Cole Gawin</p>
                    <p className={styles.email}>colegawin@gmail.com</p>
                </div>
            </div>
        </div>
     
    );

}

export default SearchBar;