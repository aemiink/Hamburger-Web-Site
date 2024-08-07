import React from 'react';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Link} from "react-router-dom";
import '../styles/footer.css'

function Footer() {
    return (
        <div className="Footer">
            <div className="social-media">
                <XIcon/>
                <InstagramIcon/>
                <YouTubeIcon/>
            </div>
            <div className="social-media-links">
                <Link to='/'> Home </Link>
                <Link to='/menu'>Menu </Link>
                <Link to='/about'>About Us </Link>
                <Link to='/contact'>Contact  </Link>
            </div>
            <div className="Rights">
                <p>&copy;2024 nexuSpark Coding & AEK Burger House | All Rights Reserved </p>
            </div>
        </div>
    );
}

export default Footer;