import { ParallaxBanner } from "react-scroll-parallax";
import pic from "../assets/pickoto.svg"
import "./Home.css"
import TypingAnimation from "@/components/ui/typing-animation";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const Home = () => {
    useEffect(()=>{
        Aos.init();
    }, [])
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
                   <div className="lg:leading-[5rem]">
                   <h1 className=" "></h1>
                   <TypingAnimation
                    className="text-[#fff] text-[2rem]  pt-[2rem] font-oswald md:text-[3.5rem] lg:text-[4rem]"
                    text="Let's Bring Your Ideas to Life with Design and Development!"
                    />
                </div>
                </div>
            </div>
            <div className="imageDesk w-[50%] hidden md:block absolute right-0" >
            <ParallaxBanner
            layers={[{ image: 'src/assets/pickoto.svg', speed: 5, translateY: -30 }]}
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