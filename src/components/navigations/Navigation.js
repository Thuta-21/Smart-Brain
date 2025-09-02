import React from "react";
import './Navigation.css';

const Navigation = ({onRouteChange, isSignedIn}) => {
        if(isSignedIn) {
            return (
                <nav>
                    <div className="link dim pt3 pr3 f4" style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <a href="#link" onClick={() => onRouteChange('signin')} className="changes pa2 pl3 pr3 shadow-2 br3">Sign Out</a>
                    </div>
                </nav>
            );
        } else {
            return (
                <nav>
                    <div className="link dim pt3 pr3 f4" style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <a href="#link" className="ml mr3 grow changes pa2 pl3 pr3 shadow-2 br3" onClick={() => onRouteChange('signin')}>Sign in</a>
                        <a href="#link" className='changes pa2 grow pl3 pr3 shadow-2 br3' onClick={() => onRouteChange('Register')}>Register</a>
                    </div>
                </nav>
            )
        }
}

export default Navigation;