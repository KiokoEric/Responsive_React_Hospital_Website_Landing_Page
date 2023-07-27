import React from 'react';
import "../Home/Home.css";
import Hero from "../../Images/hero-banner.png"

const Home = () => {
return (
    <div className='Home'>
        <article>
            <section data-aos="fade-right" data-aos-duration="1500"  data-aos-delay="500">
                <h5>Welcome to Doclab</h5>
                <h1>Find Nearest <br /> Doctor. </h1>
                <form action="">
                    <p>
                        Search doctors, clinics, hospitals e.t.c
                    </p>
                    <div>
                        <input type='text' placeholder='Locations'/>
                        <i id='location' class="fa-sharp fa-solid fa-location-dot"></i>
                        <button><i id='search' class="fa-solid fa-magnifying-glass"></i> Find Now</button>
                    </div>
                </form>
            </section>
            <section data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                <figure>
                    <img src={Hero} alt="" className='Hero'/>
                </figure>
            </section>
        </article>
    </div>
)
}

export default Home