import { useNavigate } from "react-router-dom";
import SectionContainer from "../components/SectionContainer";

const About = () => {
    const Navigate = useNavigate()
    
    return (
        <SectionContainer id="about" className="pt-28 pb-32">
            <div className="font-bold italic mb-5">
                <h1 className="font-black text-secondcolor text-5xl lg:text-7xl">Sobre mí</h1>
            </div>
            <article className="gap-4 flex flex-col text-start text-xl text-pretty lg:w-1/2">
                <p>
                    Soy un apasionado Desarrollador Web Full Stack con un enfoque creativo y una mente analítica.
                </p>
                <p>
                    Especializado en <span className="text-threecolor font-black">Django</span> y <span className="text-threecolor font-black">React</span>.
                    Me dedico a construir soluciones creativas a desafíos tecnológicos.
                </p>
                <p>
                    También me gusta el desarrollo personal, las finanzas y el diseño UX/UI.
                </p>
            </article>
            
            <button type="button" className="col-span-4 col-start-4 rounded-full text-firstcolor 
                bg-grey text-xl font-bold p-3 mt-10 lg:hover:bg-firstcolor lg:hover:text-white" onClick={() => Navigate('/contact')}>Trabajemos Juntos!</button>
            
        </SectionContainer>
    );
}
 
export default About;