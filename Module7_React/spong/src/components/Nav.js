import React from "react";
import apple from "../img/apple.png";
import spotify from "../img/spotify.png";
import deezer from "../img/deezer.png";
import { Link } from "react-router-dom";

function Nav() {

  const navStyle = {
    textDecoration: "none",
    color: "rgb(253, 216, 170)"
  }

  return (
    <div className="nav">
      <Link style={navStyle} to="/">
        <h1 className="nav_home">HOME</h1>
      </Link>
      <Link style={navStyle} className="spong_link" to="../About">
        <div className="title_container">
          <h1 className="spong_h1">SPONG</h1>
          <h4 className="spong_h4">Your Favorite Single Page Song App</h4>
        </div>
      </Link>

      <ul className="social">
        <li>
          
          <a target="./blank" href="https://www.spotify.com/nl/">
            <img className="social_img" src={spotify} alt="Spotify" />
          </a>
        </li>
        <li>
          <a target="./blank" href="https://www.apple.com/nl/apple-music/">
            <img className="social_img" src={apple} alt="Apple Music" />
          </a>
        </li>
        <li>
          <a target="./blank" href="https://www.deezer.com/nl/?origin=Adwords&utm_campaign=acq-nl_sea_brand&utm_content=homepage&utm_medium=search-obj_sub&utm_source=google_adwords_search&gclid=CjwKCAiAtK79BRAIEiwA4OskBrEC88EioPtwL1uZokWYHatyulFwO0Jp52E-SquT6Deh8pASTAT2ORoCwa8QAvD_BwE">
            <img className="social_img" src={deezer} alt="Deezer" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
