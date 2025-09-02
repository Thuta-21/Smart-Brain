import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({imageURL, box}) => {
    return (
        <>
            {box.length ? <div className="show tc f3 pa2 br3 shadow-1 bg-light-blue grow">Total faces = <span className="bg-white br4 pa1">{`${box.length}`}</span></div>: ''}
            <div className="center mt4 mb3">
                <div className="photo" >
                    <img id="detectPhoto" className="br4"  style={{width: '800px', height: 'auto'}} src={imageURL} alt=""/>
                    { box.length
                    ? box.map((i, index) => {
                        return <div key={`box ${index}`} className="faceBox" style={{top: box[index].topRow+20, right: box[index].rightCol+20, bottom: box[index].bottomRow+20, left: box[index].leftCol+20}}></div>
                    })
                    : ''}
                </div>
            </div>
        </>
    )
}

export default FaceRecognition; 