import React, { useState } from 'react';
import "../Header/Header.css"
import logo from "../../Images/logo.svg"

const Header = () => {

    const [ExtendNavbar,setExtendNavbar ] = useState(false)


return (
<div className='Header'> 
    <article>
        <section>
            <figure>
                <img src={logo} alt="" />
            </figure>
        </section>
        <section>
            <nav>
                <ul id='Navigation' className={ExtendNavbar ? "CloseNavigation" : "OpenNavigation" } onClick={() => setExtendNavbar(false)} >
                    <li>Home</li>
                    <li>Doctors</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <button>Make Appointment</button>
            <figure onClick={()=> {setExtendNavbar((curr) => !curr)}} >
                {ExtendNavbar ? <i  id="Bars" class="fa-solid fa-bars"></i> : <i id='Bars' class="fa-solid fa-xmark"></i>}
            </figure>
        </section>
    </article>
</div>
)
}

export default Header