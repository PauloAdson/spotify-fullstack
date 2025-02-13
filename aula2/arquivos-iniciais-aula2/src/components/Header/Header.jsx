import React from 'react'
// import './styles.css';
import logoSpotify from '../../assets/logo/spotify-logo.png'

const Header = () => {
    return (
        <header className='header'>
            <a href="/">
                <img src={logoSpotify} alt="Logo Spotify" />
            </a>
            <a className='header__link' href="/">
                <h1>Spotify</h1>
            </a>
        </header>
    )
}

export default Header