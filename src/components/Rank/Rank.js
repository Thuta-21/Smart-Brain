import React from "react";
import './Rank.css';

const Rank = ({name, rank}) => {
    return (
        <div className="tc mt2">
            <div className="f5">
                {`${name}, Your total detected count is`}
            </div>
            {/* <div className="center"> */}
                <div className="f1 center rank shadow-5 mt3" style={{fontWeight: 'bold'}}>
                    {` ${rank}`}
                </div>
            {/* </div> */}
        </div>
    )
}

export default Rank;