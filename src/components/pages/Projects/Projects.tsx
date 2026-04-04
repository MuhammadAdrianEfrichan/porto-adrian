import { FaCode } from "react-icons/fa6";


interface PropTypes{
    id? : string;
    classname? :string;
}



const Projects = ({ id, classname }: PropTypes) => {
    return <main id={id} className={classname}>
            <div className="container mx-auto px-6">
                <div className="flex items-center gap-3 mt-10 mb-15
                lg:m-0">
                <span className="text-yellow-400 text-[16px] sm:text-[22px] lg:text-[27px] xl:text-[28.8px] 2xl:text-[30px] tracking-widest uppercase font-sans "> projects </span>
                    <span className="block w-[75%] h-px sm:w-[75%] lg:w-[82%]
                    xl:w-[85%] 2xl:w-[87%]
                    bg-yellow-400"></span>
            </div>
            <div className="flex  flex-wrap gap-10 lg:grid lg:grid-flow-col lg:grid-rows-2  lg:mt-10">
                <div className="w-full h-70 border border-gray-500 px-6 py-7 bg-slate-800 hover:scale-105 transition-transform  hover:border-sky-400 cursor-default">
                    <FaCode className="text-blue-400 text-xl mb-4"/>
                    <span className="text-[18px] text-gray-300 font-bold uppercase font-sans">sistem cafe</span>
                    <p className="text-gray-400 mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod saepe quis velit dolore, facilis nam animi quam aperiam. Quisquam, illum?</p>
                    <div className="flex gap-3 mt-5">
                    <div className="text-gray-400 w-20 border text-center bg-[#0a1628] hover:text-blue-400 hover:border-sky-400">React.ts</div>
                    <div className="text-gray-400 w-20 border text-center bg-[#0a1628] hover:text-blue-400 hover:border-sky-400">Tailwind</div>
                    </div>
                </div>
                <div className="w-full h-70 border border-gray-500 px-6 py-7 bg-slate-800 hover:scale-105 transition-transform  hover:border-sky-400 cursor-default">
                    <FaCode className="text-blue-400 text-xl mb-4"/>
                    <span className="text-[18px] text-gray-300 font-bold uppercase font-sans">Portofolio</span>
                    <p className="text-gray-400 mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod saepe quis velit dolore, facilis nam animi quam aperiam. Quisquam, illum?</p>
                    <div className="flex gap-3 mt-5">
                    <div className="text-gray-400 w-20 border text-center bg-[#0a1628] hover:text-blue-400 hover:border-sky-400">React.ts</div>
                    <div className="text-gray-400 w-20 border text-center bg-[#0a1628] hover:text-blue-400 hover:border-sky-400">Tailwind</div>
                    </div>
                </div>
                 <div className="w-full h-70 border border-gray-500 px-6 py-7 bg-slate-800 hover:scale-105 transition-transform  hover:border-sky-400 cursor-default">
                    <FaCode className="text-blue-400 text-xl mb-4"/>
                    <span className="text-[18px] text-gray-300 font-bold uppercase font-sans">Visit Sumbar</span>
                    <p className="text-gray-400 mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod saepe quis velit dolore, facilis nam animi quam aperiam. Quisquam, illum?</p>
                    <div className="flex gap-3 mt-5">
                    <div className="text-gray-400 w-20 border text-center bg-[#0a1628] hover:text-blue-400 hover:border-sky-400">Javascript</div>
                    <div className="text-gray-400 w-20 border text-center bg-[#0a1628] hover:text-blue-400 hover:border-sky-400">Tailwind</div>
                    </div>
                </div>
                <div className="w-full h-70 border border-gray-500 px-6 py-7 bg-slate-800 hover:scale-105 transition-transform  hover:border-sky-400 cursor-default">
                    <FaCode className="text-blue-400 text-xl mb-4"/>
                    <span className="text-[18px] text-gray-300 font-bold uppercase font-sans">Movie Search</span>
                    <p className="text-gray-400 mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod saepe quis velit dolore, facilis nam animi quam aperiam. Quisquam, illum?</p>
                    <div className="flex gap-3 mt-5">
                    <div className="text-gray-400 w-20 border text-center bg-[#0a1628] hover:text-blue-400 hover:border-sky-400">Javascript</div>
                    </div>
                </div>
                
            </div>
            </div>
    </main>
}


export default Projects;