import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

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

function MovieBox(props){
  const location = useLocation()
   console.log(props, "props");
   console.log(location, "useLocation Hook");
   const data = location.state?.data;

    const trailer = "https://www.bing.com/videos/search?q=video+of+topgun+trailer+2021&docid=603483767445421082&mid=E1154269594FA1B0FAA0E1154269594FA1B0FAA0&view=detail&FORM=VIRE"
    return(
        <>
            <div className="movie-page">
              <div className="nav-bar">
                <div className="logo">
                  <Logo />
                  <p className="icon-name">Movie Box</p>
                </div>
                <div className="nav-icons"> 
                  <div className="home-icon">
                    <div className="icon"><Home /></div>
                    <p className="icon-name" style={{marginLeft: 15}}>Home</p>
                  </div>
                  <div className="movies-icon">
                    <div className="icon"><Movies /></div>
                    <p className="icon-name" style={{marginLeft: 15}}>Movies</p>
                  </div>
                  <div className="tv-icon">
                    {/* <div className="icon"><Tv /></div> */}
                    <p className="icon-name" style={{marginLeft: 12}}>Tv Series</p>
                  </div>
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
                    <p data-testid="movie-title">{data.title} </p>
                    <p data-testid="movie-release-date">{data.release_date} </p>
                    <p>. PG-13 . 2H 10M  Action  Drama</p>
                    <p data-testid="movie-runtime"> 200 m </p>
                  </section>
                  <section style={{display: 'flex', fontSize: '1vw', justifyContent: 'center', alignItems: 'center'}}>
                    <Star />
                    <p style={{marginRight: 10, marginLeft: 5, paddingTop: 13}}>{data.vote_average}</p>
                  </section>
                  
                  </div>
                <div className="movie-info">
                  <div className="info-1">
                    <p data-testid="movie-overview">
                      {data.overview}
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






