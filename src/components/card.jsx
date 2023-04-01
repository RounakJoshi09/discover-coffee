import Link from 'next/link';
import Image from 'next/image'; 
import React, { Component } from 'react';
import styles from './card.module.css';
function Card(props) {
    return ( 
        <Link href={props.target}>
                <div className={styles.container}>
                    <div className={styles.title}>                    
                    <h2>
                    {props.name}
                    </h2>
                    </div>
                    <div className={styles.storeImage}>
                    <Image alt='coffee-store-image' src="https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=600" height={160} width={260}/>
                    </div>
                </div>
        </Link>
     );
}

export default Card;