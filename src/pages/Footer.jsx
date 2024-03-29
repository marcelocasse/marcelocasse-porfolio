import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    const year = new Date();
    const linkedin = "https://www.linkedin.com/in/marcelo-gabriel-casse/"
    const github = "https://github.com/marcelocasse"
    
    return (
        <div className="flex flex-col w-full mt-4">
            <span className="border-t border-secondcolor border-2 my-6"></span>
            
            <div className="flex  justify-center lg:justify-between gap-2 items-center mb-4 flex-wrap">
                <span className="text-secondcolor lg:text-2xl font-bold"><Link to="/">Marcelo Casse</Link></span>
                <p className="text-wrap items-center">©️ {year.getFullYear()} Marcelo Casse. All rights reserved.</p>

                <ul className="flex gap-4">
                    <li className="bg-white size-10 rounded-full bg-opacity-10 text-white flex justify-center items-center lg:hover:text-secondcolor"><Link to={linkedin} target="_blank"><FaLinkedinIn className="text-2xl" /></Link></li>
                    <li className="bg-white size-10 rounded-full bg-opacity-10 text-white flex justify-center items-center lg:hover:text-secondcolor"><Link to={github} target="_blank"><FaGithub className="text-2xl"/></Link></li>
                </ul>
            </div>
            
        </div>

    );
}
 
export default Footer;