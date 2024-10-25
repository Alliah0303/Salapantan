import card2 from './assets/Thumbnail.svg'
import card1 from './assets/Thumbnail3.svg'
import card3 from './assets/Thumbnail2.svg'
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const Projects = () => {
    useEffect(()=>{
        Aos.init();
    }, [])
    return(
        <section id="projects" className="flex flex-col text-center text-[#A020F0] gap-[2rem]">
            <div className="w-[100%] bg-[#A020F0] py-[2rem] md:py-[4rem]" >
                <h1 className="text-[3rem] text-[#fff] font-semibold"data-aos="flip-left"data-aos-duration="2000">MY PROJECTS</h1>
                <p className="text-[1.2rem] text-[#000] tracking-[.5rem]" data-aos="flip-left"data-aos-duration="2000">MADE WITH LOVE</p>
            </div>
            <div className="px-[1rem] md:px-[10rem] py-[2rem]">
            <ul className='proj flex flex-col gap-[2rem] items-center sm:gap-[3rem]'>
            <li className='cards'data-aos="zoom-in-down" data-aos-duration="2000" ><img src={card1} ></img></li> 
            <p className='descrip'data-aos="fade-right" data-aos-duration="2000"> This project called "Awesome Todos," is a website using React for the front-end, which provides a dynamic and responsive user interface, and MongoDB for the back-end, which serves as the database to store and manage user tasks efficiently.  </p>
            <li className='cards'data-aos="zoom-in-down" data-aos-duration="2000"><img src={card2} ></img></li>
            <p className='descrip'data-aos="fade-right" data-aos-duration="2000">  This project is a furniture selling website built using HTML, CSS, and JavaScript, designed to provide a visually appealing and interactive platform for users to browse and purchase furniture products.</p>
            <li className='cards'data-aos="zoom-in-down" data-aos-duration="2000"><img src={card3} ></img></li>
            <p className='descrip'data-aos="fade-right" data-aos-duration="2000"> This project "Nexcent" is a sophisticated and dynamic website UI designed specifically for agencies. It utilizes vanilla HTML for structure, Tailwind CSS for styling, and JavaScript for interactivity, ensuring a seamless and visually appealing user experience. The combination of these technologies allows for a responsive and modern design that can effectively showcase agency services and engage users. </p>
        </ul>
            </div>
        </section>
    );
}

export default Projects