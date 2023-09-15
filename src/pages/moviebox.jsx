import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

import './moviebox.css'
import { ReactComponent as Logo} from "./icons/Logo.svg"
import {ReactComponent as Home} from "./icons/Home.svg"
import {ReactComponent as Movies} from "./icons/Movie-Projector.svg"
// import {ReactComponent as Tv} from "./icons/Tv.svg"
import {ReactComponent as Star} from "./icons/Star.svg"

import {ReactComponent as Calender} from "./icons/Calendar.svg"
import {ReactComponent as Logout} from "./icons/Logout-1.svg"
import {ReactComponent as Ticket} from "./icons/Ticket.svg"
import {ReactComponent as More} from "./icons/Menu.svg"

import VideoPlayer from "../components/VideoPlayer";
import { useParams } from "react-router-dom";

import Movie from '../assets/Movie.svg'


function MovieBox(props){
   const location = useLocation()
  //  console.log(props, "props");
  //  console.log(location, "useLocation Hook");
  //  const data = location.state?.data;
  console.log(props, "props");
  const data = location.state?.data;
  console.log(data)

    const [movieData, setMovieData] = useState('')
    const id  = data.id
    

    useEffect(() => {
      getData()
      window.scrollTo(0,0)
  }, [])

    const getData = () => {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=11ec9a45249e6fffdfb5db1838a81ff2&language=en-US`)
      .then(res => res.json())
      .then(data => setMovieData(data))
  }

console.log(`movie data ${movieData}`)

    const trailer = "https://www.bing.com/videos/search?q=video+of+topgun+trailer+2021&docid=603483767445421082&mid=E1154269594FA1B0FAA0E1154269594FA1B0FAA0&view=detail&FORM=VIRE"
    return(
        <>
            <div className="movie-page">
              <div className="nav-bar">
                <Link className="link" to="/" aria-label="home">
                  <div className="logo">
                    <Logo />
                    <p className="icon-name">Movie Box</p>
                  </div>
                </Link>
                <div className="nav-icons"> 
                  <NavLink className="link" to="/" aria-label="home">
                    <div className="home-icon">
                      <div className="icon"><Home /></div>
                      <p className="icon-name" style={{marginLeft: 15}}>Home</p>
                    </div>
                  </NavLink>
                  <NavLink className="link" to="/" aria-label='home'>
                    <div className="movies-icon">
                      <div className="icon"><Movies /></div>
                      <p className="icon-name" style={{marginLeft: 15}}>Movies</p>
                    </div>
                  </NavLink>
                  
                  <NavLink className="link" to="/" aria-label="Movies">
                    <div className="tv-icon">
                      <img className="icon" src={Movie} alt="Movies Icon" style={{height: 24, width: 24}} />
                      <span className="icon-name">Movie</span>
                    </div>
                 
                  </NavLink>
                  <div className="calender-icon">
                    <div className="icon"><Calender /></div>
                    <p className="icon-name" style={{marginLeft: 15}}>Upcoming</p>
                  </div>
                </div>
                <div className="quiz">
                  <p style={{fontWeight: 550, fontSize: '1vw'}}>
                    play movie quizes and earn free ticket
                  </p>
                  <p style={{color: 'darkgray', marginTop: -10, fontSize: '1vw'}}>50K people are playing now</p>
                  <div className="play-button">
                    <p>Start playing</p>
                  </div>
                </div>
                <div className="logout">
                  <Logout />
                  <p>Log Out</p>
                </div>
              </div>

              {/* body */}

              <div className="body">
                <div className="video">
                  <VideoPlayer />
                </div>
                <div className="movie-summary" >
                  <section style={{display: 'flex', fontSize: '1vw', justifyContent: 'space-between', width: '60%'}}>
                    <p data-testid="movie-title">{movieData.title} </p>
                    <p data-testid="movie-release-date">{movieData.release_date} </p>
                    <p>. PG-13 . 2H 10M  Action  Drama</p>
                    <p data-testid="movie-runtime"> {movieData.runtime} </p>
                  </section>
                  <section style={{display: 'flex', fontSize: '1vw', justifyContent: 'center', alignItems: 'center'}}>
                    <Star />
                    <p style={{marginRight: 10, marginLeft: 5, paddingTop: 13}}>{movieData.vote_average}</p>
                  </section>
                  
                  </div>
                <div className="movie-info">
                  <div className="info-1">
                    <p data-testid="movie-overview">
                      {movieData.overview}
                    </p>
                    <p>Director: Joseph Kosinski</p>
                    <p>Writers: Jim Cash, Jack Epps Jr, Peter Craig</p>
                    <p>Stars: Tom Cruise, Jennifer Connelly, Miles Teller</p>
                    <div style={{display: "flex"}}>
                      <div className="rating">
                        Top rated movie #65
                      </div>
                      <div className="awards">
                        Awards: 9 nominations
                      </div>
                    </div>
                  </div>
                  <div className="more">
                    <div className="showtime">
                      <Ticket />
                      See Showtimes
                    </div>
                    <div className="watch-options">
                      <More />
                      More watch options
                    </div>
                </div>
                </div>
                
              </div>
            </div>
           

        </>
    )
    
}


export default MovieBox






