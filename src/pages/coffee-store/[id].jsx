import React, { Component } from 'react';
import {useRouter} from 'next/router'
function CoffeeStore() {
    const router = useRouter();
    return ( <h1>Coffee Store {router.query.id} </h1> );
}

export default CoffeeStore;