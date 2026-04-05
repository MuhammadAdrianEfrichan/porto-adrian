import { TypeAnimation } from "react-type-animation";
import Link from "../../ui/Link/Link";
import About from "../About";
import Skils from "../Skils";
import Projects from "../Projects";
import Contact from "../Contact";
import Footer from "../Footer";
import ScroolFadein from "../../hooks/ScroolFadein";
import { HiArrowSmUp } from "react-icons/hi";
import FloatingRings from "../FloatingRings";

const Home = () => {
    return <div className="">
        <nav className=" shadow-[0_0_0_0.5px_rgba(255,255,255,0.2)] w-full h-17 flex justify-between items-center pr-8  " >
                <div className="pl-8 text-white font-serif text-[18px] font-bold">M<span className="text-blue-500">.</span>Adrian</div>
                <div className="flex justify-evenly  w-100 font-sans uppercase text-[14px]">  
                <Link href="#about" className="hidden sm:block text-gray-500  hover:text-blue-400">About</Link>
                <Link href="#skills" className="hidden sm:block text-gray-500 hover:text-blue-400">Skils</Link>
                <Link href="#projects" className="hidden sm:block text-gray-500 hover:text-blue-400 ">Projects</Link>
                <Link href="#contact" className="hidden sm:block text-gray-500 hover:text-blue-400">Contact</Link>
                </div>
                    <Link href="#" className="py-4 px-6 text-blue-400 border border-blue-400 flex items-center text-[12px] font-light h-4 hover:bg-blue-400 hover:text-white rounded-sm font-sans whitespace-nowrap sm:whitespace-normal">
                    HIRE ME</Link>
                    
        </nav>
        <Link href="#">  <div className="fixed bottom-15 right-8 text-white cursor-pointer text-[35px] z-10 bg-blue-900 rounded-full animate-bounce">
            <HiArrowSmUp />
        </div></Link>
      
        <ScroolFadein>
            <div className="mt-25 flex fadein">
                <FloatingRings classname="hidden xl:block"/>
                <div className="container mx-auto px-6 ">
                    <div className="flex items-center gap-3">
                    <span className="block w-10 h-px bg-blue-400"></span>
                    <span className="text-blue-400 text-xs tracking-widest uppercase font-sans lg:text-[16px]">frontend developer</span>
                    </div> 
                    <div className="flex flex-col text-[55px] text-white font-serif leading-none mt-7 font-bold sm:text-[65px] md:text-[75px] lg:text-[80px]">
                        Muhammad <span className="text-blue-400">Adrian</span> 
                        <TypeAnimation
                            sequence={[
                                'Efrichan.',
                                1000,
                                'Efr',
                                1000,
                                'Efrichan.',
                                1000,
                                '',
                                1000,
                                'Efrichan.',
                                1000,
                                
                            ]}
                            wrapper="span"
                            speed={10}
                            style={{ fontSize: '55px',fontFamily: 'serif', display: 'inline-block' }}
                            repeat={Infinity}
                            />
                    </div>
                    <div className="mt-8 w-88 sm:w-100 lg:w-120">
                        <p className="text-gray-500 lg:text-[20px]">
                            I build web interfaces that are elegant by design, fast by nature, 
                            and human at heart — where clean code and meaningful aesthetics 
                            converge into something worth experiencing.
                            </p>
                    </div>
                    <div className="mt-7 flex gap-5 mb-35">
                        <Link href="#projects" className="bg-blue-500 px-5 py-4 uppercase font-sans rounded-md text-white hover:bg-blue-400">view projects</Link>
                        <Link href="#about" className="px-5 py-4 outline-2 outline-blue-500 rounded-md uppercase font-sans  text-gray-400 hover:bg-blue-400 hover:text-white">about me</Link>
                    </div>
                    <div className=" shadow-[0_0_0_0.5px_rgba(255,255,255,0.2)] w-full"></div>

                    <div className="flex w-88 justify-between font-sans py-10">
                        <div className="text-center">
                            <h1 className="text-[45px] text-white">2+</h1>
                            <p className="text-gray-500 uppercase text-[12px]">years exp</p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-[45px] text-white">4</h1>
                            <p className="text-gray-500 uppercase text-[12px]">Projects</p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-[45px] text-white">3</h1>
                            <p className="text-gray-500 uppercase text-[12px]">technologies</p>
                        </div>
                    </div>
                    <div className=" shadow-[0_0_0_0.5px_rgba(255,255,255,0.2)] w-full"></div>
                </div>
            </div>
            </ScroolFadein>
            <ScroolFadein>
                <About id="about" classname="xl:mt-40"/>
            </ScroolFadein>
            <ScroolFadein>
                <Skils id="skills" classname="xl:mt-40" />
            </ScroolFadein>
            <ScroolFadein>
                <Projects id="projects" classname="xl:mt-40"/>
            </ScroolFadein>
            <ScroolFadein>
                <Contact id="contact" classname="xl:mt-20" />
            </ScroolFadein>
            <Footer />

    </div>
}

export default Home;