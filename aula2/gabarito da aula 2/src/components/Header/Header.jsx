import React from "react";
// import './styles.css';
import logoSpotify from "../../assets/logo/spotify-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logoSpotify} alt="Logo Spotify" />
      </Link>
      <Link className="header__link" to="/">
        <h1>Spotify</h1>
      </Link>
    </header>
  );
};

export default Header;
