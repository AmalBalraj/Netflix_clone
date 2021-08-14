import React, { useState } from 'react'
import './Banner.css'
import {useEffect} from 'react'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then(
            (response)=>{
                console.log(response.data.results[0])
                setMovie(response.data.results[Math.floor(Math.random()*21)])
            }
        )
    }, [])
    return (  
        <div
        style = {{backgroundImage: `url(${movie? imageUrl+movie.backdrop_path: ""})`}} 
        className = 'banner'>
            <div className = 'content'>
                <h1 className = "title">{movie ? movie.title : ""}</h1>
                <div className = "banner_bottons">
                    <button className="botton">Play</button>
                    <button className="botton">My List</button>
                </div>
                <div className="description">{movie ? movie.overview : ""}</div>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
