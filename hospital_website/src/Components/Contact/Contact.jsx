import React from 'react';
import "../Contact/Contact.css";
import logo from "../../Images/logo.svg"

const Contact = () => {
return (
    <div data-aos="fade-up" className='Contact'>
        <article>
            <section>
                <figure>
                    <img src={logo} alt="" />
                </figure>
            </section>
            <section>
                <figure>
                    <i class="fa-solid fa-envelope-open"></i>
                    <figcaption>
                        <p>
                            Main Email: contact@website.com
                        </p>
                        <p>
                            Inquiries: info@mail.com
                        </p>
                    </figcaption>
                </figure>
            </section>
            <section>
                <figure>
                    <i class="fa-solid fa-phone"></i>
                    <figcaption>
                        <p>
                            Office Telephone: 00291 2910 2320
                        </p>
                        <p>
                            Mobile: 000 2324 39493
                        </p>
                    </figcaption>
                </figure>
            </section>
        </article>
    </div>
)
}

export default Contact