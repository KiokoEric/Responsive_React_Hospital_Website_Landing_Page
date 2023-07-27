import React from 'react';
import "../Doctors_Listing/Doctors_Listing.css";
import Psychiatry from "../../Images/icon-1.png";
import Gynecology from "../../Images/icon-2.png";
import Pulmonology from "../../Images/icon-4.png";
import Orthopedics from "../../Images/icon-5.png";
import Pediatrics from "../../Images/icon-6.png";
import Osteology from "../../Images/icon-7.png";

const Doctors_Listing = () => {
return (
    <div className='Doctors'>
        <article>
            <section data-aos="fade-up">
                <div>
                    <h4>Doctors Listing</h4>
                    <h2>Browse by Specialist</h2>
                </div>
                <figure>
                    <img src={Psychiatry} alt="" />
                    <figcaption>
                        <h3>Psychiatry</h3>
                        <p>Porta Velit</p>
                    </figcaption>
                </figure> 
                <figure>
                    <img src={Gynecology} alt="" />
                    <figcaption>
                        <h3>Gynecology</h3>
                        <p>Mattis Augue</p>
                    </figcaption>
                </figure>
            </section>
            <section data-aos="fade-up">
                <figure>
                    <img src={Pulmonology} alt="" />
                    <figcaption>
                        <h3>Pulmonology</h3>
                        <p>Mauris Laoreet</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src={Orthopedics}  alt="" />
                    <figcaption>
                        <h3>Orthopedics</h3>
                        <p>Convallis Vulputate</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src={Pediatrics} alt="" />
                    <figcaption>
                        <h3>Pediatrics</h3>
                        <p>Posuere Maecenas</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src={Osteology} alt="" />
                    <figcaption>
                        <h3>Osteology</h3>
                        <p>Nisi Nuliam</p>
                    </figcaption>
                </figure>
            </section>
        </article>
    </div>
)
}

export default Doctors_Listing