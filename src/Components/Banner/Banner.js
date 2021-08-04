import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className = 'banner'>
            <div className = 'content'>
                <h1 className = "title">Movie Name</h1>
                <div className = "banner_bottons">
                    <button className="botton">Play</button>
                    <button className="botton">My List</button>
                </div>
                <div className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio praesentium numquam! Totam velit consequatur blanditiis deserunt eum et praesentium animi dolor, omnis perspiciatis quidem dignissimos, eligendi vitae pariatur temporibus!</div>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
