import Link from 'next/link';
import Image from 'next/image'; 
import React, { Component } from 'react';
import styles from './card.module.css';
import cls from 'classnames';
function Card(props) {
    return ( 
        <Link href={props.target} className={cls(styles.container, "glass")}>
                    <div className={styles.title}>                    
                    <h2>
                    {props.name}
                    </h2>
                    </div>
                   
                    <Image className={styles.storeImage} alt='coffee-store-image' src="https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=600" height={160} width={260}/>
                   
               
        </Link>
     );
}

export default Card;