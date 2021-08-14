import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl} from '../../constants/constants'

function RowPost(props) {
    const [Movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            console.log(response.data)
            setMovies(response.data.results)
        }).catch(err => {
            alert('Unable to get posts request')
        })
    }, [])

    return (
        <div className = 'row'>
            <h2 className = 'title'>{props.title}</h2>
            <div className="posters">
                {Movies.map((obj)=>
                    <img className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                )}


                
                
            </div>
            
        </div>
    )
}

export default RowPost
