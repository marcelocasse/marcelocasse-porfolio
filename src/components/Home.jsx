import marcelo from "../assets/marcelo-casse-photo.jpg"
import cv from "../assets/curriculum.pdf"
import SectionContainer from "./SectionContainer";

const Home = () => {
    return (
        <SectionContainer id='home'>
            <picture className="col-span-3">
                <img src={marcelo} alt="Marcelo Casse" className="rounded-full object-cover pointer-events-none"></img>
            </picture>

            <div className="font-bold col-span-7">
                <h1 className="text-7xl w-full">I'm Marcelo Casse</h1>
                <h3 className="text-secondcolor text-2xl py-4">Full Stack Web Development</h3>
                <button className="rounded-full text-firstcolor 
                        bg-grey text-xl px-6 py-2 mt-10 hover:bg-firstcolor hover:text-white"
                    onClick={() => {
                        window.open(cv, '_blank').focus();
                    }}>
                    Curriculum
                </button>
            </div>
        </SectionContainer>
    );
}
 
export default Home;