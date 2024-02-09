import marcelo from "../assets/marcelo-casse-photo.jpg"
import cv from "../assets/curriculum.pdf"
import SectionContainer from "../components/SectionContainer";

const Home = () => {
    return (
        <SectionContainer id='home' className="lg:flex-row">
            <picture className="size-52 lg:size-96">
                <img src={marcelo} alt="Marcelo Casse" className="rounded-full object-cover pointer-events-none"></img>
            </picture>

            <div className="font-bold  flex flex-col w-full items-center">
                <h1 className="text-4xl lg:text-7xl w-full">I'm Marcelo Casse</h1>
                <h3 className="text-secondcolor text-base lg:text-2xl py-4">Full Stack Web Development</h3>
                <button className="rounded-full text-firstcolor w-1/2 
                        bg-grey lg:text-xl px-6 py-2 mt-10 lg:hover:bg-firstcolor lg:hover:text-white"
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