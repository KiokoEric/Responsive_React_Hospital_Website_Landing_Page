import React from 'react';
import "../Medical_Services/Medical_Services.css";
import Psychiatry from "../../Images/icon-1.png";
import Gynecology from "../../Images/icon-2.png";
import Pulmonology from "../../Images/icon-3.png";
import Orthopedics from "../../Images/icon-4.png";

const Medical_Services = () => {
return (
    <div data-aos="fade-up" data-aos-duration="1000" className='Services'>
        <article>
            <figure> 
                <img src={Psychiatry} alt="" />
                <figcaption>
                    <h4>Psychiatry</h4>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </p>
                    <i class="fa-solid fa-arrow-right"></i>
                </figcaption>
            </figure>
            <figure>
                <img src={Gynecology} alt="" />
                <figcaption>
                    <h4>Gynecology</h4>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </p>
                    <i class="fa-solid fa-arrow-right"></i>
                </figcaption>
            </figure>
            <figure>
                <img src={Pulmonology} alt="" />
                <figcaption>
                    <h4>Pulmonology</h4>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </p>
                    <i class="fa-solid fa-arrow-right"></i>
                </figcaption>
            </figure>
            <figure>
                <img src={Orthopedics} alt="" />
                <figcaption>
                    <h4>Orthopedics</h4>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </p>
                    <i class="fa-solid fa-arrow-right"></i>
                </figcaption>
            </figure>
        </article>
    </div>
)
}

export default Medical_Services