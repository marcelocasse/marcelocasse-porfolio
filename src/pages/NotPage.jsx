import SectionContainer from "../components/SectionContainer";
import {useNavigate} from 'react-router-dom'

const NotPage = () => {
    const navigate = useNavigate()
    return (
        <SectionContainer>
            <div className="text-center flex flex-col  p-20 col-start-3 col-end-9 shadow-xl rounded-xl gap-5">
                <h1 className="text-9xl font-black">404</h1>
                <h3 className="italic font-bold">OOPS! PAGE NOT FOUND</h3>
                <p>Sorry, the page you're looking for doesn't exist.</p>
                <button className="bg-grey p-2 rounded-full text-firstcolor font-bold hover:bg-firstcolor hover:text-white" type="button" onClick={() => navigate('/')}>Return to Home</button>
            </div>
        </SectionContainer>
    );
}
 
export default NotPage;