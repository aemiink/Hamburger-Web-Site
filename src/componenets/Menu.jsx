import React from 'react';
import { Data } from '../helpers/Data';
import '../styles/menu.css'
import banner from '../assets/banner.png'



function Menu() {
    return (
        <div className="menu" style={{backgroundImage: `url(${banner})`}}>
                <h1>Our Burgers</h1>
            <div className="menuList">
                {Data.map(item => (
                    <div key={item.id} className="menu-item">
                        <img src={item.image} alt={item.name} className="menu-image" width="300px"/>
                        <div className="menu-details">
                            <h3 className="menu-name">{item.name}</h3>
                            <p className="menu-content">{item.content}</p>
                            <p className="menu-price">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;