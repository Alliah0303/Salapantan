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
      <section className="bg-[#2E073F] text-center pt-[2rem]" id='contact'>
          <h2 className="text-[1.5rem] text-[#EBD3F8] font-semibold"data-aos="flip-left" data-aos-duration="2000" >CONNECT WITH ME</h2>
          <p className="text-[.8rem] text-[#AD49E1] tracking-[.5rem]" data-aos="flip-left" data-aos-duration="2000" >ON MY SOCIAL NETWORKS OR EMAIL</p>
          <ul className="social-icons flex flex-col items-center justify-center gap-[3rem] mt-[2rem] sm:flex-row"> 
          <li className='media'  data-aos="flip-down" data-aos-duration="1000">
    <a href='https://www.facebook.com/profile.php?id=100020038524919&mibextid=ZbWKwL'> 
        <img src={facebook} alt="Facebook" className="icon-small" />
    </a>
</li>
<li className='media' data-aos="flip-down" data-aos-duration="1000">
    <a href='https://www.instagram.com/jude_alliah/'> 
        <img src={instagram} alt="Instagram" className="icon-small" />
    </a>
</li>
<li className='media' data-aos="flip-down" data-aos-duration="1000">
    <a href='https://x.com/Alliah0303'> 
        <img src={twitter} alt="Twitter" className="icon-small" />
    </a>
</li>

          </ul>
          <div className='gmail my-[2rem]'>
              <a href="mailto:salapantan.judealliahsit2011@gmail.com" target='-blank' className="email font-medium">
                  <p className='mt-[.5rem] md:tracking-[.1rem] text-[.rem] text-[#AD49E1]' >salapantan.judealliahsit2011@gmail.com</p>
              </a> 
          </div>
          <div className="footer bg-[#fff] text-[#2E073F] font-medium py-[1rem]">
              <p>&copy; 2024 Jude Alliah Salapantan. All rights reserved.</p>
          </div>
      </section>
  );
}


export default Contact