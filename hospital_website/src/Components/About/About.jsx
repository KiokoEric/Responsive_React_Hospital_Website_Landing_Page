import React from 'react';
import "../About/About.css";
import About_Banner from "../../Images/about-banner.png"

const About = () => {
return (
    <div className='About'>
        <section data-aos="fade-right">
            <h4>About Us</h4>
            <h2>Experienced Workers</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cupiditate error facere aut dignissimos reiciendis in placeat culpa magnam aspernatur.
            </p>
            <div className='Message'> 
                <button>Vision</button>
                <button>Mission</button>
                <button>Strategy</button>
            </div>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium et voluptas porro fugit velit debitis voluptatum est earum neque.
            </p>
            <div className='List'>
                <ul>
                    <li>Lorem voluptatum odio deleniti.</li>
                    <li>Cupiditate ipsum laborum aspernatul.</li>
                </ul>
                <ul>
                    <li>Consectetur adipisicing elit.</li>
                    <li>In deserunt non expedita excepturi.</li>
                </ul>
            </div>
        </section>
        <section data-aos="fade-left">
            <figure>
                <img src={About_Banner} alt=""/>
            </figure>
        </section>
    </div>
)
}

export default About