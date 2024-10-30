import card2 from './assets/Thumbnail.png'
import card1 from './assets/Thumbnail3.svg'
import card3 from './assets/Thumbnail2.svg'
import "./Projects.css"
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const Projects = () => {
    useEffect(()=>{
        Aos.init();
    }, [])
    return(
        <section id="projects" className="flex flex-col text-center gap-[2rem]">
        <div className="w-[100%] bg-[#2E073F] py-[2rem] md:py-[4rem]">
            <h1 className="text-[3rem] text-[#EBD3F8] font-semibold" data-aos="flip-left" data-aos-duration="2000">MY PROJECTS</h1>
            <p className="text-[1.2rem] text-[#AD49E1] tracking-[.5rem]" data-aos="flip-left" data-aos-duration="2000">MADE WITH LOVE</p>
        </div>
        <div className="px-[1rem] md:px-[10rem] py-[2rem]">
            <ul className='proj flex flex-col gap-[2rem] items-center sm:gap-[3rem]'>
                <li className='cards'  data-aos="zoom-in-down" data-aos-duration="2000">
                    <a href="https://github.com/Alliah0303/Alli" target="_blank" rel="noopener noreferrer">
                        <img src={card1} alt="Awesome Todos" />
                    </a>
                </li>
                <p className='text-left text-[#2E073F] descrip' data-aos="fade-right" data-aos-duration="2000">
                    This project called "Awesome Todos," is a website using React for the front-end, which provides a dynamic and responsive user interface, and MongoDB for the back-end, which serves as the database to store and manage user tasks efficiently.
                </p>
    
                <li className='cards' data-aos="zoom-in-down" data-aos-duration="2000">
                    <a href="https://github.com/Alliah0303/Furniture" target="_blank" rel="noopener noreferrer">
                        <img src={card2} alt="Furniture Selling Website" />
                    </a>
                </li>
                <p className='text-left text-[#2E073F] descrip' data-aos="fade-right" data-aos-duration="2000">
                    This project is a furniture selling website built using HTML, CSS, and JavaScript, designed to provide a visually appealing and interactive platform for users to browse and purchase furniture products.
                </p>
    
                <li className='cards' data-aos="zoom-in-down" data-aos-duration="2000">
                    <a href="https://github.com/Alliah0303/Nexcent" target="_blank" rel="noopener noreferrer">
                        <img src={card3} alt="Nexcent" />
                    </a>
                </li>
                <p className='text-left text-[#2E073F] descrip' data-aos="fade-right" data-aos-duration="2000">
                    This project "Nexcent" is a sophisticated and dynamic website UI designed specifically for agencies. It utilizes vanilla HTML for structure, Tailwind CSS for styling, and JavaScript for interactivity, ensuring a seamless and visually appealing user experience.
                </p>
            </ul>
        </div>
    </section>
    
    );
}

export default Projects