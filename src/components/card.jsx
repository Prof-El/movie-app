import React from "react";
import { Col, Row } from 'antd';
import { useState, useEffect } from "react";
import './card.css'
import {ReactComponent as Heart} from "../pages/icons/Heart.svg"

import {Link, useNavigate} from "react-router-dom"



function Card(props){
// Trying to make the favorite icon dynamic
  var favoriteGroup = props.movie.map(ele => {
    return {
      id: ele.id,
      on: false
    }
  })

 

  const [fillColor, setFillColor] = useState('none')


    
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

 

  const handleClick = () => {
    if (fillColor == 'none'){
      setFillColor(prev => 'red')
    }else {
      setFillColor(prev => 'none')
    }


  }

   
  return(
    <>
      <div className="block-categories">
        <h2>Featured Movies</h2>
        <Row gutter={[24, 24]}>
          {
            props.movie.slice(0, 10).map(movie => {
              return (
                <Col lg={4} key={movie.id}>
                <div className="card">
                  {/* trying to fix the onclik */}
                    <div className="fav-icon" id={movie.id}  onClick={()=>{handleClick(movie)}}>
                      <Heart fill={fillColor} />
                    </div>
                <Link to={`/moviebox/${movie.id}`} state={{data: movie}} className="link">
                  <div className="content" data-testid="movie=card">
                    <div className="image">
                      <img data-testid="movie-poster" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="poster cover" />
                    </div>
                    <p className="date" data-testid="movie-release-date">{movie.release_date}</p>
                    <p data-testid="movie-poster" style={{marginTop: "-10px"}}>{movie.title}</p>
                    
                  </div>
                  </Link>
                  </div>
                </Col>
              )
            })
          }
          
        </Row>
      </div>
      

    
    </>
  )
    
}




export default Card






