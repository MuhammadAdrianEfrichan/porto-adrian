import { MdCopyright } from "react-icons/md";

const Footer = ()=>{
    return <footer className="shadow-[0_0_0_0.5px_rgba(255,255,255,0.2)] w-full h-25 flex flex-col md:flex-row md:justify-between gap-2 items-center px-6 ">     
                <div className=" text-white font-serif text-[18px] font-bold ">M<span className="text-blue-500">.</span>Adrian</div>
                <div className="flex gap-1 font-serif text-gray-300">
                    <MdCopyright className=" mt-1 text-md"/>2026 — Muhammad Adrian Efrichan 
                </div>
                <div className="text-gray-500">Padang, Indonesia</div>
                    
    </footer>
        
    
}


export default Footer;