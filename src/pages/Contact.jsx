import facebook from '../assets/Facebook.svg'
import instagram from '../assets/Instagram.svg'
import twitter from '../assets/Twitter.svg'
import "./Contact.css"
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const Contact = () => {
    useEffect(()=>{
        Aos.init();
    }, [])
  return(
      <section className="bg-[#A020F0] text-center pt-[2rem]" id='contact'>
          <h2 className="text-[3rem] text-[#fff] font-semibold"data-aos="flip-left" data-aos-duration="2000" >CONNECT WITH ME</h2>
          <p className="text-[1.2rem] text-[#000] tracking-[.5rem]" data-aos="flip-left" data-aos-duration="2000" >ON MY SOCIAL NETWORKS OR EMAIL</p>
          <ul className="social-icons flex flex-col items-center justify-center gap-[6rem] mt-[2rem] sm:flex-row"> 
              <li className='media'data-aos="flip-down" data-aos-duration="1000" >
                  <a href='https://www.facebook.com/profile.php?id=100020038524919&mibextid=ZbWKwL'> 
                      <img src={facebook} alt="Facebook" />
                  </a>
              </li>
              <li className='media'data-aos="flip-down" data-aos-duration="1000" >
                  <a href='https://www.instagram.com/jude_alliah/'> 
                      <img src={instagram} alt="Instagram" />
                  </a>
              </li>
              <li className='media'data-aos="flip-down" data-aos-duration="1000" >
                  <a href='https://x.com/Alliah0303'> 
                      <img src={twitter} alt="Twitter" />
                  </a>
              </li>
          </ul>
          <div className='gmail my-[3rem]'>
              <a href="mailto:salapantan.judealliahsit2011@gmail.com" target='-blank' className="email font-medium">
                  <p className='md:tracking-[.5rem]'data-aos="flip-down" data-aos-duration="1000" >salapantan.judealliahsit2011@gmail.com</p>
              </a> 
          </div>
          <div className="footer bg-[#fff] text-[#000] font-medium py-[1rem]">
              <p>&copy; 2024 Jude Alliah Salapantan. All rights reserved.</p>
          </div>
      </section>
  );
}


export default Contact