import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import Brain from './Brain.png'

const Logo = () => {
    return (
        <Tilt style={{ height: '200px', width: '200px' }} className="ml3 mt3">
            <div className="" style={{ height: '200px', width: '200px' }}>
                <img src={Brain} alt="logo"/>
            </div>
        </Tilt> 
    )
}

export default Logo;