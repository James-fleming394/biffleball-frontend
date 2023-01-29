import React from "react";
import { useNavigate } from "react-router-dom";

const Community = () => {
    
    let navigate = useNavigate();

    return (
        <>
        <div className="community">
            <h1>Community</h1>
        </div>
        <div className="category">
            <div className="title-category">
                <h2 className="communityh2">Announcements</h2>
            </div>
            <img className="category-image" 
            src="https://c1.wallpaperflare.com/preview/501/991/764/baseball-crowd-game-lights.jpg" />
        </div>
        <div className="category">
            <div className="title-category">
                <h2 className="communityh2">Blog</h2>
            </div>
            <img className="category-image" 
            src="https://c1.wallpaperflare.com/preview/377/306/543/baseball-field-base-ball-scenery-lights.jpg" />
        </div>
        <div className="category">
            <div className="title-category">
                <h2 className="communityh2">Questions</h2>
            </div>
            <img className="category-image" 
            src="https://img.mlbstatic.com/mlb-photos/image/upload/w_1500,q_100/v1/people/605137/action/hero/current" />
        </div>
        </>
    )
}

export default Community;