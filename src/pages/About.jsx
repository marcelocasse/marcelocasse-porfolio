import { useNavigate } from "react-router-dom";
import SectionContainer from "../components/SectionContainer";

const About = () => {
    const Navigate = useNavigate()
    
    return (
        <SectionContainer id="about">
            <div className="font-bold italic mb-5">
                <h1 className="font-black text-secondcolor text-5xl lg:text-7xl">About me</h1>
            </div>
            <article className="gap-4 flex flex-col text-start text-xl text-pretty lg:w-1/2">
                <p>
                    I'm a passionate Full Stack Web Developer with a creative approach
                    and an analytical mind.
                </p>
                <p>
                    Specialized in <span className="text-threecolor font-black">Django</span> and <span className="text-threecolor font-black">React</span>. I'm dedicated to building creative solutions to technological challenges.
                </p>
                <p>
                    I also like personal development, finances and UX/UI design.
                </p>
            </article>
            
            <button type="button" className="col-span-4 col-start-4 rounded-full text-firstcolor 
                bg-grey text-xl font-bold p-3 mt-10 lg:hover:bg-firstcolor lg:hover:text-white" onClick={() => Navigate('/contact')}>Let's work together</button>
            
        </SectionContainer>
    );
}
 
export default About;