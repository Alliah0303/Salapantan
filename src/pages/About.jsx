import Icons1 from '../assets/HTML5.svg'
import Icons2 from '../assets/CSS3.svg'
import Icons3 from '../assets/Figma.svg'
import Icons4 from '../assets/react.svg'
import Icons5 from '../assets/Nodejs.svg'
import Icons6 from '../assets/Visual Studio Code.svg'
import "./About.css"
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const About = () => {
    useEffect(()=>{
        Aos.init();
    }, [])
    return(
        <section className="px-[1rem] flex flex-col text-center md:px-[10rem] text-[#0E0E0E] pt-[5rem] pb-[3rem] gap-[2rem]" id='about'>
            <div data-aos="fade-up"data-aos-duration="2000">
                <h1 className="font-semibold text-[2rem] mb-[1rem]">ABOUT ME</h1>
                <p className='text-left'>
                Hello! I'm Jude Alliah S. Salapantan, a 20-year-old student currently in my 3rd year of college, pursuing a Bachelor of Science in Information Technology (BSIT). I previously graduated from the Western Institute of Technology with high honors, where I studied the TVL-ICT strand. My passion for technology drives me to continuously expand my knowledge and skills in the field of IT.
                </p>
            </div>

            <div className="flex flex-col gap-[1rem]"  data-aos="fade-up"data-aos-duration="2000">
                <h1 className="font-semibold text-[2rem]">MY BACKGROUND</h1>
                <p className='text-left'>
                Growing up in Suarez St., San Miguel, Iloilo, I have always been surrounded by a supportive community that values education and hard work. From a young age, I was fascinated by how technology could change the way we live and work, which inspired me to pursue the TVL-ICT strand at the Western Institute of Technology, where I graduated.
                </p>
                <p className='text-left'>
                Driven by my passion for technology and its potential to solve real-world problems, I continued my education in a Bachelor of Science in Information Technology (BSIT) program, where I am currently in my 3rd year. During this time, I have been developing my skills and gaining a strong foundation in both the theoretical and practical aspects of IT.
                </p>
                <p className='text-left'>
                I am now seeking an opportunity to apply my skills and experiences in a professional environment where I can contribute to meaningful projects while continuing to learn and grow. My background in IT, combined with my dedication to perseverance, adaptability, and continuous learning, makes me eager to bring value to a team in the tech industry.
                </p>
            </div>
            <div className='self-center' data-aos="fade-up" data-aos-duration="2000">
                <h1 className="font-semibold text-[2rem] mb-[1rem]">My SKILLS</h1>
                <ul className='icon-list flex flex-col items-center gap-[2rem] md:flex-row'>
                     <li><img src={Icons1} className="icon" alt="HTML" /> HTML</li> 
                     <li><img src={Icons2} className="icon" alt="CSS" /> CSS</li>
                     <li><img src={Icons3} className="icon" alt="Figma" /> FIGMA</li>
                     <li><img src={Icons4} className="icon" alt="ReactJS" /> REACTJS</li>
                     <li><img src={Icons5} className="icon" alt="NodeJS" /> NODEJS</li>
                     <li><img src={Icons6} className="icon" alt="VSCode" /> VSCODE</li>
                </ul>
            </div>
        </section>
    );
}

export default About