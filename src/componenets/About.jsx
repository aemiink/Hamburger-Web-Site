import React from 'react';
import Banner from '../assets/baner_about.png'
import '../styles/about.css'

function About() {
    return (
        <div className="about" style={{backgroundImage: `url(${Banner})`}}>
            <div className="about-text">
                <h1> About Our RESTAURANT</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab beatae non vel
                    consequuntur perspiciatis aliquid quasi culpa reprehenderit consequatur odio
                    delectus explicabo illum in sint, voluptates doloribus eum aut? Exercitationem
                    sapiente ducimus repellendus minima aspernatur! Sed illum repellat, quis aperiam
                    natus nihil dolorum est minus saepe facilis distinctio veritatis, inventore quae
                    mollitia praesentium? Alias cupiditate illo provident eveniet, ipsam tenetur,
                    quibusdam eum nihil ipsum corporis numquam laudantium a repellendus accusamus
                    amet aliquid quod assumenda dolorem reiciendis! Beatae, soluta temporibus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                </p>


            </div>
        </div>
    );
}

export default About;