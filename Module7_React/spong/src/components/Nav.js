import React from "react";

function Nav() {
  return (
    <div className="nav">
      <h1 className="spong">SPONG</h1>
      <h4 className="spong">Your Favorite Single Page Song App</h4>
      <ul className="social">
        <li>
          <a href="https://www.spotify.com/nl/">
            <img src="" alt="Spotify"/>
          </a>
        </li>
        <li>
          <a href="https://www.apple.com/nl/apple-music/">
            <img src="" alt="Apple Music"/>
          </a>
        </li>
        <li>
          <a href="https://www.deezer.com/nl/?origin=Adwords&utm_campaign=acq-nl_sea_brand&utm_content=homepage&utm_medium=search-obj_sub&utm_source=google_adwords_search&gclid=CjwKCAiAtK79BRAIEiwA4OskBrEC88EioPtwL1uZokWYHatyulFwO0Jp52E-SquT6Deh8pASTAT2ORoCwa8QAvD_BwE">
            <img src="" alt="Deezer"/>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
