import React from "react";
import './ImgLinkForm.css';

const ImgLinkForm = ({onInputChange, onSubmit, setValue}) => {
    return (
            <div className="mt4">
                <p className="f3 tc">
                    {'This Magic Brain will detect the faces. Get it try.'}
                </p>
                <div>
                    <div className="center pl3 pr3">
                        <div className="form center pa3 br4 shadow-2">
                            <input className="f4 pa2 w-70 center br3" value={setValue} placeholder="Enter image URL" type="text" name="link" onChange={onInputChange}/>
                            <button className="w-30 grow f4 link ph3 pv2 dib whtie bg-light-blue br3" type="submit" onClick={onSubmit}>Detect</button>
                        </div>
                    </div>
                </div>
                
            </div>
    )
}

export default ImgLinkForm;