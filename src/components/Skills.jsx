import { FaCss3Alt } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa6";
import { SiDjango } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";

const Skills = () => {
    return (
        <section className="text-center pt-28 pb-32 grid gap-6" id="skills">
            <h1 className="text-secondcolor font-black text-7xl italic">SKILLS</h1>
            <div className="w-full grid grid-cols-5 gap-4">
                <div className="flex flex-col col-span-1 items-center p-5 rounded-r-md transition duration-300 hover:scale-125 hover:shadow-md gap-2">
                    <FaCss3Alt className="text-7xl"/>
                    <p className="text-base">CSS3</p>
                </div>
                <div className="flex flex-col items-center p-5 rounded-r-md transition duration-300 hover:scale-125 hover:shadow-md gap-2">
                    <FaHtml5 className="text-7xl"/>
                    <p className="text-base">HTML5</p>
                </div>
                <div className="flex flex-col items-center p-5 rounded-r-md transition duration-300 hover:scale-125 hover:shadow-md gap-2">
                    <IoLogoJavascript className="text-7xl"/>
                    <p className="text-base">Javascript</p>
                </div>
                <div className="flex flex-col items-center p-5 rounded-r-md transition duration-300 hover:scale-125 hover:shadow-md gap-2">
                    <FaPython className="text-7xl"/>
                    <p className="text-base">Python</p>
                </div>
                <div className="flex flex-col items-center p-5 rounded-r-md transition duration-300 hover:scale-125 hover:shadow-md gap-2">
                    <SiDjango className="text-7xl"/>
                    <p className="text-base">Django</p>
                </div>
                <div className="flex flex-col items-center p-5 rounded-r-md transition duration-300 hover:scale-125 hover:shadow-md gap-2">
                    <SiPostgresql className="text-7xl"/>
                    <p className="text-base">Postgresql</p>
                </div>
                <div className="flex flex-col items-center p-5 rounded-r-md transition duration-300 hover:scale-125 hover:shadow-md gap-2">
                    <GrReactjs className="text-7xl"/>
                    <p className="text-base">React.js</p>
                </div>
                <div className="flex flex-col items-center p-5 rounded-r-md transition duration-300 hover:scale-125 hover:shadow-md gap-2">
                    <FaGitAlt className="text-7xl"/>
                    <p className="text-base">Git</p>
                </div>
                <div className="flex flex-col items-center p-5 rounded-r-md transition duration-300 hover:scale-125 hover:shadow-md gap-2">
                    <DiScrum className="text-7xl"/>
                    <p className="text-base">Scrum</p>
                </div>
                <div className="flex flex-col items-center p-5 rounded-r-md transition duration-300 hover:scale-125 hover:shadow-md gap-2">
                    <FaBootstrap className="text-7xl"/>
                    <p className="text-base">Bootstrap</p>
                </div>
                <div className="flex flex-col items-center p-5 rounded-r-md transition duration-300 hover:scale-125 hover:shadow-md gap-2">
                    <BiLogoTailwindCss className="text-7xl"/>
                    <p className="text-base">Tailwind</p>
                </div>
                
            </div>
        </section>
    );
}
 
export default Skills;