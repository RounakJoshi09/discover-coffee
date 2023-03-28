import React, { Component } from 'react';

function Banner(props) {
    const {buttonText,handleOnClick} = props;
    return ( 
        <div>
            <h1>
                <span>Discover</span>
                <span>Your Coffee</span>
            </h1>
            <p>
                Your Local Coffe Shops
            </p>
            <button onClick={handleOnClick}>
                {buttonText}
            </button>
        </div>
     );
}

export default Banner;