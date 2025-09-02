import React from "react";
import './Navigation.css';

const Navigation = ({onRouteChange, isSignedIn}) => {
        if(isSignedIn) {
            return (
                <nav>
                    <div className="link dim pt3 pr3 f4" style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <a href="#link" onClick={() => onRouteChange('signin')}>Sign Out</a>
                    </div>
                </nav>
            );
        } else {
            return (
                <nav>
                    <div className="link dim pt3 pr3 f4" style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <a href="#link" className="ml4 mr4" onClick={() => onRouteChange('signin')}>Sign in</a>
                        <a href="#link" onClick={() => onRouteChange('Register')}>Register</a>
                    </div>
                </nav>
            )
        }
}

export default Navigation;