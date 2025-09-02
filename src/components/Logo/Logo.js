import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import Brain from './pngwing.com.png';

const Logo = () => {
    return (
        <div className="centeri mt3 mb4">
            <Tilt style={{ height: '150px', width: '150px' }} className="ml3 mt3">
            <div className="" style={{ height: '150px', width: '150px' }}>
                <img src={Brain} alt="logo"/>
            </div>
        </Tilt> 
        </div>
    )
}

export default Logo;