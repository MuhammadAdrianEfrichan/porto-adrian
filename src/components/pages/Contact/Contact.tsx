import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Link from "../../ui/Link/Link";
import { MdOutlineEmail } from "react-icons/md";


interface PropTypes{
    id? : string;
    classname? :string;
}

const Contact = ({ id, classname }: PropTypes) => {
    return (
        <main id={id} className={classname}>
            <div className="container mx-auto px-6 lg:mt-40 mb-20">
                <div className="flex items-center gap-3 mt-20 mb-10
                lg:m-0">
                <span className="text-yellow-400 text-[16px] sm:text-[22px] lg:text-[27px] xl:text-[28.8px] 2xl:text-[30px] tracking-widest uppercase font-sans "> Contact </span>
                    <span className="block w-[75%] h-px sm:w-[75%] lg:w-[82%]
                    xl:w-[85%] 2xl:w-[87%]
                    bg-yellow-400"></span>
            </div>
            <div className="flex flex-col text-[55px] text-white font-serif leading-none mt-7 font-bold sm:text-[65px] md:text-[75px] lg:text-[80px]">
            Let's <span className="text-blue-400"> Something </span> Together</div>
                <p className="text-gray-500 mt-5 lg:w-100">I'm open to freelance opportunities, project collaborations, and discussions about interesting ideas. Don't hesitate to contact me.</p>
                <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 mt-10 lg:w-[60%]">
                    <div className="flex gap-3 w-full h-20 items-center px-5 border border-gray-500 py-7 bg-slate-800 hover:-translate-y-2 transition-transform  hover:border-sky-400 cursor-pointer"><div className="p-2 border border-sky-500 bg-slate-700 "><FaGithub className="text-blue-400 text-[30px]"/></div>
                <Link href="https://github.com/MuhammadAdrianEfrichan" className="text-gray-400 transition-colors w-full h-full flex flex-col justify-center"><span>GitHub</span> <div className="text-white font-serif font">MuhammadAdrianEfrichan</div></Link>
                </div>
                <div className="flex gap-3 w-full h-20 items-center px-5 border border-gray-500 py-7 bg-slate-800 hover:-translate-y-2 transition-transform  hover:border-sky-400 cursor-pointer"><div className="p-2 border border-sky-500 bg-slate-700 "><MdOutlineEmail className="text-blue-400 text-[30px]"/></div>
                <Link href="mailto:adrianefrich@gmail.com" className="text-gray-400 transition-colors w-full h-full flex flex-col justify-center"><span>Email</span> <div className="text-white font-serif font">adrianefrich@gmail.com</div></Link>
                </div>
                <div className="flex gap-3 w-full h-20 items-center px-5  border border-gray-500 py-7 bg-slate-800 hover:-translate-y-2 transition-transform  hover:border-sky-400 cursor-pointer"><div className="p-2 border border-sky-500 bg-slate-700 "><FaInstagram className="text-blue-400 text-[30px]"/></div>
                <Link href="https://instagram.com/m.adrianefrichan_" className="text-gray-400 transition-colors w-full h-full flex flex-col justify-center"><span>Instagram</span> <div className="text-white font-serif font">m.adrianefrichan_</div></Link>
                </div>
                <div className="flex gap-3 w-full h-20 items-center px-5  border border-gray-500 py-7 bg-slate-800 hover:-translate-y-2 transition-transform  hover:border-sky-400 cursor-pointer"><div className="p-2 border border-sky-500 bg-slate-700 "><FaLinkedin className="text-blue-400 text-[30px]"/></div>
                <Link href="https://linkedin.com/in/muhammad-adrian-efrichan" className="text-gray-400 transition-colors w-full h-full flex flex-col justify-center"><span>LinkedIn</span> <div className="text-white font-serif font">MuhammadAdrianEfrichan</div></Link>
                </div>
                </div>
             
            </div>

        </main>
    );
};



export default Contact;