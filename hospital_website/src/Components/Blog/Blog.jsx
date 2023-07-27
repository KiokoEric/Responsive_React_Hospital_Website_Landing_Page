import React from 'react';
import "../Blog/Blog.css"

const Blog = () => { 
return (
    <div data-aos="fade-up" className='Blog'>
        <section>
            <h4>News & Article</h4>
            <h2>Latest Articles</h2>
        </section>
        <section>
            <figure>
                <div>
                    <p>
                        <i class="fa-solid fa-user"></i> BY ADMIN
                    </p>
                    <p>
                        <i class="fa-regular fa-folder-open"></i> Specialist
                    </p>
                </div>  
                <figcaption>
                    <h3>
                        Could intermittent fasting <br /> reduce breast cancer
                    </h3>
                    <h5 className='Uppercase'>
                        28 January 2022
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quidem, minus earum cum in distinctio. Quisquam, voluptas.
                    </p>
                    <h4>
                        <a href='#'>Read More</a>
                    </h4>
                </figcaption>
            </figure>
            <figure>
                <div>
                    <p>
                        <i class="fa-solid fa-user"></i> BY ADMIN
                    </p>
                    <p>
                        <i class="fa-regular fa-folder-open"></i> Specialist
                    </p>
                </div>  
                <figcaption>
                    <h3>
                        Give children more autonomy <br /> during the pandemic.
                    </h3>
                    <h5 className='Uppercase'>
                        28 February 2022
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quidem, minus earum cum in distinctio. Quisquam, voluptas.
                    </p>
                    <h4>
                        <a href='#'>Read More</a>
                    </h4>
                </figcaption>
            </figure>
            <figure>
                <div>
                    <p>
                        <i class="fa-solid fa-user"></i> BY ADMIN
                    </p>
                    <p>
                        <i class="fa-regular fa-folder-open"></i> Specialist
                    </p>
                </div>  
                <figcaption>
                    <h3>
                        How does binge eating and <br /> drinking impact the liver ?
                    </h3>
                    <h5 className='Uppercase'>
                        28 March 2022
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quidem, minus earum cum in distinctio. Quisquam, voluptas.
                    </p>
                    <h4>
                        <a href='#'>Read More</a>
                    </h4>
                </figcaption>
            </figure>
        </section>
    </div>
)
}

export default Blog