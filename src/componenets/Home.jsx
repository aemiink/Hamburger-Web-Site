import React from 'react';
import '../styles/home.css'
import bg from '../assets/bg.png';
import {Link} from "react-router-dom";
import g1 from '../assets/home-animated/1.png';
import g2 from '../assets/home-animated/2.png';
import g3 from '../assets/home-animated/3.png';
import g4 from '../assets/home-animated/4.png';
import g5 from '../assets/home-animated/5.png';
import g6 from '../assets/home-animated/6.png';
import g7 from '../assets/home-animated/7.png';

function Home(props) {
    return (
        <div className="Home" style={{backgroundImage: `url(${bg})`}}>
            <div className="snows">
                <div className="snowflakes">
                    <div><img src={g1}/></div>
                    <div><img src={g2}/></div>
                    <div><img src={g3}/></div>
                    <div><img src={g4}/></div>
                    <div><img src={g5}/></div>
                    <div><img src={g6}/></div>
                    <div><img src={g7}/></div>
                    <div><img src={g1}/></div>
                    <div><img src={g2}/></div>
                    <div><img src={g3}/></div>
                    <div><img src={g4}/></div>
                    <div><img src={g5}/></div>
                </div>
            </div>
            <div className="order-menu">
                <Link to="/menu">
                    <button> Order Menu </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;