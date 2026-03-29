import Link from "../../ui/Link/Link";

const Home = () => {
    return <main>
        <nav className=" shadow-[0_0_0_0.5px_rgba(255,255,255,0.2)] w-full h-17 flex justify-between items-center pr-8" >
                <div className="pl-8 text-white font-serif text-[18px] font-bold">M<span className="text-blue-500">.</span>Adrian</div>
                <div className="flex justify-evenly  w-100 font-sans uppercase text-[14px]">  
                <Link href="#" className="hidden sm:block text-gray-500  hover:text-blue-400">About</Link>
                <Link href="#" className="hidden sm:block text-gray-500 hover:text-blue-400">Skils</Link>
                <Link href="#" className="hidden sm:block text-gray-500 hover:text-blue-400 ">Projects</Link>
                <Link href="#" className="hidden sm:block text-gray-500 hover:text-blue-400">Contact</Link>
                </div>
                    <Link href="#" className="py-4 px-6 text-blue-400 border border-blue-400 flex items-center text-[12px] font-light h-4 hover:bg-blue-400 hover:text-white rounded-sm font-sans whitespace-nowrap sm:whitespace-normal">
                    HIRE ME</Link>
                    
        </nav>
            <div className="mt-20">
                <div className="container mx-auto px-6">
                    <div className="flex items-center gap-3">
                    <span className="block w-10 h-px bg-blue-400"></span>
                    <span className="text-blue-400 text-xs tracking-widest uppercase font-sans">frontend developer</span>
                    </div> 
                    <div className="flex flex-col text-[55px] text-white font-serif leading-none mt-7 font-bold sm:text-[65px]">
                        Muhammad <span className="text-blue-400">Adrian</span> Efrichan.
                    </div>
                    <div className="mt-8 w-88 sm:w-100">
                        <p className="text-gray-500">
                            I build web interfaces that are elegant by design, fast by nature, 
                            and human at heart — where clean code and meaningful aesthetics 
                            converge into something worth experiencing.
                            </p>
                    </div>
                    <div className="mt-7 flex gap-5">
                        <Link href="#" className="bg-blue-500 px-5 py-4 uppercase font-sans rounded-md text-white hover:bg-blue-400">view projects</Link>
                        <Link href="#" className="px-5 py-4 outline-2 outline-blue-500 rounded-md uppercase font-sans  text-gray-400 hover:bg-blue-400 hover:text-white">about me</Link>
                    </div>
                </div>
            </div>


    </main>
}

export default Home;