import React from "react";

const CopyURL = ({copyURL}) => {
    return (
        <div className="mb3">
                <div className="">
                    <div className="tc">
                        <h3>Following are the some image URL for testing.</h3>
                        <button type="submit" onClick={() => copyURL('https://getdex.com/blog/content/images/2022/09/how-to-be-a-people-person-1662995088.jpg')} className="br3 f4 shadow-5 grow bg-light-pink b--transparent pa2 mr3">Set URL 1</button>
                        <button type="submit" onClick={() => copyURL('https://cdtm.com/_next/image?url=https%3A%2F%2Fcms.cdtm.com%2Fassets%2F70e7ac3e-8daf-4513-a938-34a1eb908d23%2FIMG_2326.jpg&w=3840&q=75')} className="br3 grow f4 shadow-5 bg-light-yellow b--transparent pa2 mr3">Set URL 2</button>
                        <button type="submit" onClick={() => copyURL('https://images.saymedia-content.com/.image/t_share/MTc0MjUwOTUwNjYyMzAxNTY0/top-10-best-football-teams-of-all-time.jpg')} className="br3 f4 shadow-5 bg-light-green grow b--transparent pa2">Set URL 3</button>
                    </div>
                    
                </div>
        </div>
    )
}

export default CopyURL;