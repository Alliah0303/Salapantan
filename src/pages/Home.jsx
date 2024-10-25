import { ParallaxBanner } from "react-scroll-parallax";
import pic from "../assets/pikmo6.png"
import "./Home.css"

const Home = () => {
    return(
        <section className="home pb-[2rem] flex flex-col justify-between md:flex-row md:pb-[0] md:h-[100vh] w-[100%] relative overflow-hidden" id="home">
            <div className="px-[1rem] flex py-[1rem] flex-col items-center gap-[5rem] md:w-[50%] lg:px-[5rem]">
                <nav className="w-[100%]">
                    <h1 className="text-[#fff] font-medium text-[1.2rem] lg:text-[1.5rem]">JUDE ALLIAH SALAPANTAN</h1>
                    <ul className="flex items-start gap-[1rem] mt-[.5rem] sm:gap-[1.5rem]">
                        <a href="#about"><li>Bio</li></a>
                        <a href="#projects"><li>Project</li></a>
                        <a href="#contact"><li>Contact</li></a>
                    </ul>
                </nav>
                <div className="self-center">
                <p className=" hey [1.2rem] md:text-[1.5rem] tracking-[.5rem]">HEY I'M</p>
                   <div className="lg:leading-[5rem]">
                   <h1 className="movable text-[#fff] text-[3rem] font-oswald md:text-[4rem]">JUDE ALLIAH</h1>
                   <h1 className="movable text-[#fff] text-[3rem] font-oswald md:text-[4rem]">SALAPANTAN</h1>
                </div>
                </div>
            </div>
            <div className="imageDesk w-[50%] hidden md:block absolute right-0">
            <ParallaxBanner
            layers={[{ image: 'src/assets/pikmo6.png', speed: 5, translateY: -30 }]}
            className="aspect-[1/1] hidden md:block h-screen"
            />
            {/* <img src={picc} alt="" /> */}
            </div>
            <div className="imageMob self-center md:hidden">
                <img src={pic} alt="" />
            </div>
        </section>
    );

}

export default Home