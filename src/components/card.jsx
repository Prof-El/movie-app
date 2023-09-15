import React from "react";
import { Col, Row } from 'antd';
import { useState, useEffect } from "react";
import './card.css'
import {ReactComponent as Heart} from "../pages/icons/Heart.svg"

import {Link, useNavigate} from "react-router-dom"



function Card({ movie }){
// Trying to make the favorite icon dynamic
  // var favoriteGroup = props.movie.map(ele => {
  //   return {
  //     id: ele.id,
  //     on: false
  //   }
  // })

 

  // const [fillColor, setFillColor] = useState('none')


    
  //   //Looping through objects

  //   Object.values(favoriteState).forEach(value => {
  //     if (value.id == item.id){
  //       setFavoriteState(prevState => ({
  //         ...prevState,
  //         on: !on
  //       }))
  //     }else{
  //       console.log("not equal")
  //     }
  //   })


  // }

 

  // const handleClick = () => {
  //   if (fillColor == 'none'){
  //     setFillColor(prev => 'red')
  //   }else {
  //     setFillColor(prev => 'none')
  //   }


  // }

  const [favorite, setFavorite] = useState(false);
  let fillColor = ''
  if (favorite){
    fillColor = 'red'
  }else {
    fillColor = 'none'
  }
   
  return(
    <>
      <div className="card" data-testid="movie-card">
          <button className="fav-icon" type="button"   onClick={() => setFavorite(!favorite)}>
               <Heart fill={fillColor} />
           </button>     
                
                
                <Link to={`/moviebox/${movie?.id}`} state={{data: movie}} className="link">
                  <div className="content" data-testid="movie=card">
                    <div className="image">
                      <img data-testid="movie-poster" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="poster cover" />
                    </div>
                    <p className="date" data-testid="movie-release-date">{movie.release_date}</p>
                    <p data-testid="movie-poster" style={{marginTop: "-10px"}}>{movie.title}</p>
                    
                  </div>
                  </Link>
                  
                
        
         
      </div>
      

    
    </>
  )
    
}




export default Card






