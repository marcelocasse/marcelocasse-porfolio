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
import SkillItem from "../components/SkillItem";
import SectionContainer from "../components/SectionContainer";

const Skills = () => {
    return (
        <SectionContainer id="skills" className="pt-28 pb-32">
            <h1 className="text-secondcolor font-black text-5xl lg:text-7xl italic mb-5">HABILIDADES</h1>
            <div className="w-full grid grid-cols-3 lg:grid-cols-5 items-center justify-center gap-4">
                <SkillItem component={<FaCss3Alt className="text-4xl lg:text-7xl"/>} title='CSS3'></SkillItem>
                <SkillItem component={<FaHtml5 className="text-4xl lg:text-7xl"/>} title='HTML5'></SkillItem>
                <SkillItem component={<IoLogoJavascript className="text-4xl lg:text-7xl"/>} title='Javascript'></SkillItem>
                <SkillItem component={<FaPython className="text-4xl lg:text-7xl"/>} title='Python'></SkillItem>
                <SkillItem component={<SiDjango className="text-4xl lg:text-7xl"/>} title='Django'></SkillItem>
                <SkillItem component={<SiPostgresql className="text-4xl lg:text-7xl"/>} title='Postgre sql'></SkillItem>
                <SkillItem component={<GrReactjs className="text-4xl lg:text-7xl"/>} title='React.js'></SkillItem>
                <SkillItem component={<FaGitAlt className="text-4xl lg:text-7xl"/>} title='Git'></SkillItem>
                <SkillItem component={<DiScrum className="text-4xl lg:text-7xl"/>} title='Scrum'></SkillItem>
                <SkillItem component={<FaBootstrap className="text-4xl lg:text-7xl"/>} title='Bootstrap'></SkillItem>
                <SkillItem component={<BiLogoTailwindCss className="text-4xl lg:text-7xl"/>} title='Tailwind'></SkillItem>
            </div>
        </SectionContainer>
    );
}
 
export default Skills;