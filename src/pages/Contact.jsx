import facebook from '../assets/Facebook.svg'
import instagram from '../assets/Instagram.svg'
import twitter from '../assets/Twitter.svg'
import "./Contact.css"

const Contact = () => {
  return(
      <section className="bg-[#A020F0] text-center pt-[2rem]" id='contact'>
          <h2 className="connect text-[#fff] text-[2rem] ">CONNECT WITH ME</h2>
          <p className="social font-medium">ON MY SOCIAL NETWORKS OR EMAIL</p>
          <ul className="social-icons flex flex-col items-center justify-center gap-[5rem] mt-[6rem] sm:flex-row"> 
              <li className='media'>
                  <a href='https://www.facebook.com/profile.php?id=100020038524919&mibextid=ZbWKwL'> 
                      <img src={facebook} alt="Facebook" />
                  </a>
              </li>
              <li className='media'>
                  <a href='https://www.instagram.com/jude_alliah/'> 
                      <img src={instagram} alt="Instagram" />
                  </a>
              </li>
              <li className='media'>
                  <a href='https://x.com/Alliah0303'> 
                      <img src={twitter} alt="Twitter" />
                  </a>
              </li>
          </ul>
          <div className='gmail my-[5rem]'>
              <a href="mailto:salapantan.judealliahsit2011@gmail.com" target='-blank' className="email font-medium">
                  <p className='md:tracking-[.5rem]'>salapantan.judealliahsit2011@gmail.com</p>
              </a> 
          </div>
          <div className="footer bg-[#fff] text-[#000] font-medium py-[1rem]">
              <p>&copy; 2024 Jude Alliah Salapantan. All rights reserved.</p>
          </div>
      </section>
  );
}


export default Contact