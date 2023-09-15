import React from "react";
import { useState, useEffect } from "react";
import Card from "../components/card";
import Header from "../components/header";
import './home.css'
import { ReactComponent as Logo} from "./icons/Logo.svg"
import {ReactComponent as Menu} from "./icons/Menu.svg"
import {ReactComponent as Play} from "./icons/Play-1.svg"
import {ReactComponent as Facebook} from "./icons/facebook.svg"
import {ReactComponent as Instagram} from "./icons/instagram.svg"
import {ReactComponent as Twitter} from "./icons/twitter.svg"
import {ReactComponent as Youtube} from "./icons/youtube.svg"
import {ReactComponent as Search} from "./icons/search-1.svg"

// const API_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=11ec9a45249e6fffdfb5db1838a81ff2'

function Home(){
     const [results, setResults] = useState({"results": []})
     
     const [inputValue, setInputValue] = useState('');

     const handleInputChange = (event) => {
       setInputValue(event.target.value);
     }


  const [movieList, setmovieList] = useState([])
  const [errorMessage, setErrorMessage] = useState('');
    
//   const getMovie = ()=>{
//   //   fetch("https://api.themoviedb.org/3/discover/movie?api_key=11ec9a45249e6fffdfb5db1838a81ff2")
//   fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=11ec9a45249e6fffdfb5db1838a81ff2")
//     .then(res => res.json())
//     .then(json => setmovieList(json.results))
    
//   }


const getMovie = ()=>{
    //   fetch("https://api.themoviedb.org/3/discover/movie?api_key=11ec9a45249e6fffdfb5db1838a81ff2")
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=11ec9a45249e6fffdfb5db1838a81ff2")
    .then(res => {
        if (!res.ok) {
            setErrorMessage('An error occurred while fetching the top rated movies. Please try again later.');
          throw new Error(`HTTP error! status: ${res.status}`);
          
        }
        
        return res.json();
      })
      .then(json => setmovieList(json.results))
      .catch(e => {
        console.error('An error occurred during the fetch operation:', e);
        console.log(errorMessage)
        // Display the error message to the user
        // Replace 'errorMessage' with the actual variable or method you're using to display error messages
        // errorMessage = 'An error occurred while fetching the top rated movies. Please try again later.';
      });

      
      
    }


  useEffect(()=>{
    getMovie()
    
  }, [])

  
  console.log(`movieList ${movieList}`)
  console.log(errorMessage)

  const basic ="https://image.tmdb.org/t/p/w500"
    return(
        <>
            <div style={{marginTop: 0}} className="page">
                {/* <Header movie={movieList[0]}/> */}
                <div className="header">
                    <div className="nav">
                        <Logo />
                        <div className="search">
                            <input  type="text" placeholder="What do you want to watch?" value={inputValue} onChange={handleInputChange}  />
                            <section className="search-icon" onClick={()=>{}}>
                                <Search />
                            </section>
                        </div>
                        
                        <div style={{display: "flex", alignItems: "center", justifyContent: 'center'}}>
                            <p style={{color: 'white', paddingTop: 10, marginRight: 15, fontSize: 23}}>Sign in</p>
                            <div style={{background: 'red', borderRadius: 25, width: 30, display: 'flex', justifyContent: 'center'}}>
                                <Menu fill="red" />
                            </div>
                            
                        </div>
                    </div>
                    <div className="header-info">
                        <h2 style={{fontSize: '5vw'}}>The Godfather</h2>
                        <div >
                           <div style={{fontSize: '1.5vw'}}>
                           "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge."
                           </div>
                           <div className="trailer-button" >
                            <Play />
                            <p>WATCH TRAILER</p>
                           </div>
                        </div>
                    </div>
                </div>
                <Card movie={movieList} />
                {errorMessage ?   <p style={{fontSize: '6vw', color: "red", fontWeight: '600', backgroundColor: '#101'}}>{errorMessage}</p> : null}
                <div className="footer">
                        <div className="social-icons">
                            <Facebook />
                            <Instagram />
                            <Twitter />
                            <Youtube />
                        </div>
                        <div className="footer-links">
                            <p>Conditions of Use</p>
                            <p>Privacy & Policy</p>
                            <p>Press Room</p>
                        </div>
                        <div>
                         <p>© 2021 MovieBox by Adriana Eka Prayudha</p>   
                        </div>
                </div>
            </div>
           

        </>
    )
    
}


export default Home






