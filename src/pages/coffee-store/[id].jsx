import React, { Component } from 'react';
import {useRouter} from 'next/router'
import Link from "next/link";
import styles from "../../styles/coffee-store.module.css";
import coffeeStoresData from "../../data/coffee-stores.json";
import Image  from 'next/image';
import cls from 'classnames';
export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id.toString() === params.id; //dynamic id
      }),
    },
  };
}

export async function getStaticPaths() {
    return {
      paths: coffeeStoresData.map((coffeeStore)=>{
        return {
          params:{
            id: coffeeStore.id.toString(),
          }
        }
      }),
    // paths:[
    //     { params: { id: '1' } }
    // ],
      fallback: true // See the "fallback" section below
    };
  }

const CoffeeStore = (props) => {
    console.log(props);
  const router = useRouter();
 // console.log("router", router);
 if(router.isFallback == true)
 {
    return <>
        <h2>Loading................</h2>
    </>
 }
    const {name,address,neighbourhood,imgUrl,websiteUrl,rating} = props.coffeeStore;
    console.log(imgUrl);
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.titleWrapper}>
                <h3 className={styles.title}>
                    {name}
                </h3>
                </div>
                <div className={styles.coffeeStoreContainer}>
                <div className={styles.imageWrapper}>
                    <Image className={styles.storeImage} src={imgUrl} alt="coffee-store-image" height={300} width={460}>
                    </Image>
                    </div>
                    <div className={cls(styles.coffeeInfoBox,"glass")}>
                        <div className={styles.addressWrapper}>
                        <Image src="/icons/location.png" width={32} height={32} alt='star icon'></Image>
                            <div className={styles.addressText}>{address}</div>
                        </div>  
                        <div className={styles.ratingWrapper}>
                            <Image src="/icons/star.png" width={32} height={32} alt='star icon'></Image>
                            <div className={styles.ratingText}>{rating}</div>
                        </div>
                        <div className={styles.upVoteButton}>Up Vote</div>
                    </div>
                </div>
            </div>
        </>
    )


}

export default CoffeeStore;