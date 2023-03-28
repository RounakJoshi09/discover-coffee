import React, { Component } from 'react';
import styles from './banner.module.css'
function Banner(props) {
    const {buttonText,handleOnClick} = props;
    return ( 
        <div className={styles.component}>
            <h1>
                <span className={styles.title1} >Discover</span>
                <span className={styles.title2}>Your Coffee</span>
            </h1>
            <p className={styles.subTitle}>
                Become Coffee Connoisseur
            </p>
            <button className={styles.button} onClick={handleOnClick}>
                {buttonText}
            </button>
        </div>
     );
}

export default Banner;