import Contact from "./Contact";
import { useNavigate } from "react-router-dom";

const About = () => {
    const Navigate = useNavigate()
    
    return (
        <section className="text-center items-center grid grid-cols-10 gap-6 pt-28 pb-32" id="about">
            <div className="col-start-4 col-span-4 font-bold italic mb-5">
                <h1 className="font-black text-secondcolor text-7xl">About me</h1>
            </div>
            <div className="col-span-6 col-start-3 gap-4 flex flex-col text-center text-xl text-pretty">
                <p className="text-start">
                    I'm a passionate Full Stack Web Developer with a creative approach
                    and an analytical mind.
                </p>
                <p className="text-start">
                    Specialized in <span className="text-threecolor font-black">Django</span> and <span className="text-threecolor font-black">React</span>. I'm dedicated to building creative solutions to technological challenges.
                </p>
                <p className="text-start">
                    I also like personal development, finances and UX/UI design.
                </p>
            </div>
            
            <button type="button" className="col-span-4 col-start-4 rounded-full text-firstcolor 
                bg-grey text-xl font-bold p-3 mt-10 hover:bg-firstcolor hover:text-white" onClick={() => Navigate('/contact')}>Let's work together</button>
            
        </section>
    );
}
 
export default About;