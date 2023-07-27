import React from 'react';
import "../Footer/Footer.css"

const Footer = () => {
return ( 
    <div data-aos="fade-up" className='Footer'>
        <article>
            <section>
                <h3>About Us</h3>
                <p>
                    Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Quasi.
                </p>
                <figure>
                    <i class="fa-sharp fa-regular fa-map"></i>
                    <figcaption>
                        <p>
                            2416 Mapleview Drive
                        </p>
                        <p>
                            Tampa, FL 33634
                        </p>
                    </figcaption>
                </figure>
            </section>
            <section>
                <h3>Services</h3>
                <ul>
                    <li>Conditions</li>
                    <li>Listing</li>
                    <li>How It Works</li>
                    <li>What We Offer</li>
                    <li>Latest News</li>
                    <li>Contact Us</li>
                </ul>
            </section>
            <section>
                <h3>Useful Links</h3>
                <ul>
                    <li>Conditions</li>
                    <li>Terms of Use</li>
                    <li>Our Services</li>
                    <li>Join as a Doctor</li>
                    <li>Guest List</li>
                    <li>The Team List</li>
                </ul>
            </section>
            <section>
                <h3>Subscribe</h3>
                <form action="">
                    <input type='email' placeholder='Email' />
                    <button>Subscribe</button>
                </form>
                <p>
                    Get the latest updates via email.
                </p>
            </section>
        </article>
    </div>
)
}

export default Footer