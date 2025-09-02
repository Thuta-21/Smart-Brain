import React from "react";

const Rank = ({name, rank}) => {
    return (
        <div className="tc mt2">
            <div className="f5">
                {`${name}, Your total detected count is`}
            </div>
            <div className="f1">
                {` ${rank}`}
            </div>
        </div>
    )
}

export default Rank;