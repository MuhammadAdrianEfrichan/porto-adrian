import image from "../../../assets/Image/Image.jpeg";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import Link from "../../ui/Link/input";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

interface PropTypes{
    id? : string;
    classname? :string;
}

const About = ({ id, classname }: PropTypes) =>{
    return <section id={id} className={classname}>
        <div className="container mx-auto px-6 mt-15">
            <div className="flex items-center gap-3 mt-10 mb-15
        lg:m-0">
                <span className="text-yellow-400 text-[16px] sm:text-[22px] lg:text-[27px] xl:text-[28.8px] 2xl:text-[30px] tracking-widest uppercase font-sans "> About Me </span>
                    <span className="block w-[65%] h-px sm:w-[75%] lg:w-[82%]
                    xl:w-[85%] 2xl:w-[87%]
                    bg-yellow-400"></span>
                    </div> 
                <div className="lg:flex lg:flex-row-reverse lg:items-center gap-6 ">
            <img src={image} alt="About" className="w-75 lg:w-90 aspect-square object-cover rounded-xl m-auto lg:hover:scale-105 transition-transform cursor-pointer"/>
            <div className="w-full lg:w-[60%] lg:mr-10 lg:mt-10">
            <p className="text-gray-400 text-[17px] leading-relaxed mt-15 ">I'm a frontend developer and undergraduate student at Universitas Putra Indonesia YPTK Padang, passionate about crafting clean, user-friendly interfaces. With 2 years of hands-on experience, I turn ideas into functional and visually engaging digital products.</p>
            <p className="text-gray-400 text-[17px] leading-relaxed mt-5">LCurrently pursuing my degree while actively developing real-world projects — blending academic learning with professional frontend development experience.</p>
            <div className="">
                <div className="w-60 h-50 mt-5 lg:w-120">
                    <div className="flex flex-col gap-4 p-2 lg:flex-row
                    lg:flex-wrap lg:justify-between">
                        <div className="flex gap-3"><IoLocationOutline className="text-blue-400 text-xl"/>
                        <span className="text-gray-400">Padang, Indonesia</span></div>
                        <div className="flex gap-3 lg:mr-4"><MdOutlineEmail  className="text-blue-400 text-xl"/>
                        <Link href="adrianefrich@gmail.com" className="text-gray-400 hover:text-yellow-400 transition-colors ">adrianefrich@gmail.com</Link>
                        </div>
                        <div className="flex gap-3"><FaInstagram className="text-blue-400 text-xl"/>
                        <Link href="https://www.instagram.com/m.adrianefrichan_/" className="text-gray-400 hover:text-yellow-400 transition-colors">m.adrianefrichan_</Link>
                        </div>
                        <div className="flex gap-3"><FaGithub className="text-blue-400 text-xl"/>
                        <Link href="https://github.com/MuhammadAdrianEfrichan" className="text-gray-400 hover:text-yellow-400 transition-colors">MuhammadAdrianEfrichan</Link>
                        </div>

                        


                    
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
}

export default About;
