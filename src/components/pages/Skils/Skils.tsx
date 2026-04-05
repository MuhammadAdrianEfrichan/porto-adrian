import { FaSquareFull } from "react-icons/fa6";


interface PropTypes{
    id? : string;
    classname? :string;
}


const Skils = ({ id, classname }: PropTypes) =>{
    return <main id={id} className={classname}>
        <div className="container mx-auto px-6">
            <div className="flex items-center gap-3 mt-10 mb-15
                lg:m-0">
                <span className="text-yellow-400 text-[16px] sm:text-[22px] lg:text-[27px] xl:text-[28.8px] 2xl:text-[30px] tracking-widest uppercase font-sans "> Skills </span>
                    <span className="block w-[75%] h-px sm:w-[75%] lg:w-[82%]
                    xl:w-[87%] 2xl:w-[90%]
                    bg-yellow-400"></span>
            </div> 
            <div className="xl:flex xl:mt-10 xl:gap-10 md:m-10 ">

                <div className="w-[90%] h-70 border border-sky-800 m-auto px-10 py-5 bg-slate-800 rounded-lg hover:shadow-lg hover:scale-105 transition-transform cursor-default font-sans hover:border-sky-500 xl:w-100 xl:h-80 xl:mt-0">
                    <span className="text-yellow-400 uppercase text-md flex gap-3"><FaSquareFull className="text-xs mt-1.5" />Tech Stack</span>

                    <div className="w-full flex justify-between mt-5 px-1">
                        <span className="text-white">Javascript/Typecript</span>
                        <span className="text-sky-500">80%</span>
                    </div>
                    <div className="w-full h-3 border">
                        <div className="w-[80%] h-full bg-linear-to-r from-blue-400 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div>
                    </div>
                        <div className="w-full flex justify-between mt-5 px-1">
                        <span className="text-white">CSS</span>
                        <span className="text-sky-500">90%</span>
                    </div>
                    <div className="w-full h-3 border">
                        <div className="w-[90%] h-full bg-linear-to-r from-blue-400 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div>
                    </div>
                </div>
                <div className="w-[90%] h-70 border border-sky-800 m-auto px-10 py-5 bg-slate-800 rounded-lg hover:shadow-lg hover:scale-105 transition-transform cursor-default font-sans mt-10 hover:border-sky-500 xl:w-100 xl:h-80 xl:mt-0">
                    <span className="text-blue-400 uppercase text-md flex gap-3"><FaSquareFull className="text-xs mt-1.5" />Framework</span>
                    <div className="w-full flex justify-between mt-5 px-1">
                        <span className="text-white">Tailwind</span>
                        <span className="text-sky-500">80%</span>
                    </div>
                    <div className="w-full h-3 border">
                        <div className="w-[80%] h-full bg-linear-to-r from-blue-400 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div>
                    </div>
                    <div className="w-full flex justify-between mt-5 px-1">
                        <span className="text-white">Next.js</span>
                        <span className="text-sky-500">80%</span>
                    </div>
                    <div className="w-full h-3 border">
                        <div className="w-[80%] h-full bg-linear-to-r from-blue-400 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div>
                    </div>
                        <div className="w-full flex justify-between mt-5 px-1">
                        <span className="text-white">Node.js</span>
                        <span className="text-sky-500">60%</span>
                    </div>
                    <div className="w-full h-3 border">
                        <div className="w-[60%] h-full bg-linear-to-r from-blue-400 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div>
                    </div>
                </div>
                <div className="w-[90%] h-50 border border-sky-800 m-auto px-10 py-5 bg-slate-800 rounded-lg hover:shadow-lg hover:scale-105 transition-transform font-sans mt-10 hover:border-sky-500 cursor-default xl:w-100 xl:h-80 xl:mt-0">
                <span className="text-orange-400 uppercase text-md flex gap-3"><FaSquareFull className="text-xs mt-1.5" />Dev tools</span>
                    <div className="flex flex-wrap gap-3 mt-5">
                        <div className="text-gray-400 w-10 border text-center bg-[#0a1628] hover:text-blue-400 hover:border-sky-400">Git</div>
                        <div className="text-gray-400 w-15 border text-center bg-[#0a1628] hover:text-blue-400 hover:border-sky-400">Github</div>
                        <div className="text-gray-400 w-20 border text-center bg-[#0a1628] hover:text-blue-400 hover:border-sky-400">VS Code</div>
                        <div className="text-gray-400 w-20 border text-center bg-[#0a1628] hover:text-blue-400 hover:border-sky-400">Postman</div>
                        <div className="text-gray-400 w-20 border text-center bg-[#0a1628] hover:text-blue-400 hover:border-sky-400">Cursor </div>
                        <div className="text-gray-400 w-15 border text-center bg-[#0a1628] hover:text-blue-400 hover:border-sky-400">npm</div>
                        <div className="text-gray-400 w-20 border text-center bg-[#0a1628] hover:text-blue-400 hover:border-sky-400">Claude AI</div>
                    </div>

                </div>
            </div>
                
        </div>
    </main>
}

export default Skils;