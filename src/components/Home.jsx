import Nav from "./Nav";
import NavItem from "./NavItem"
import marcelo from "../assets/marcelo-casse-photo.jpg"
import cv from "../assets/curriculum.pdf"

const Home = () => {
    return (
        <section className="container m-auto" id="home">
            <div className="font-Nunito flex flex-row text-center items-center gap-[54px] justify-center">
                <img src={marcelo} alt="Marcelo Casse" className="rounded-full size-[333px]"></img>
                
                <div className="font-bold">
                    <h1 className="text-[4rem] w-full">I'm Marcelo Casse</h1>
                    <h3 className="text-secondcolor text-[1.5rem]">Full Stack Web Development</h3>
                    <button className="rounded-full text-firstcolor 
                        bg-grey px-[25px] py-2 mt-10 hover:bg-firstcolor hover:text-white" 
                        onClick={()=>{
                            window.open(cv, '_blank').focus();
                        }}>
                            Download CV
                    </button>
                </div>
                
            </div>
        </section>
    );
}
 
export default Home;