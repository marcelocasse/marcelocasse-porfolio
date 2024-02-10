import SectionContainer from "../components/SectionContainer";
import {useNavigate} from 'react-router-dom'

const NotPage = () => {
    const navigate = useNavigate()
    return (
        <SectionContainer>
            <div className="text-center flex flex-col  p-20 col-start-3 col-end-9 shadow-xl rounded-xl gap-5">
                <h1 className="text-9xl font-black">404</h1>
                <h3 className="italic font-bold">OOPS! PAGINA NO ENCONTRADA</h3>
                <p>Lo siento, la página que estás buscando no existe.</p>
                <button className="bg-grey p-2 rounded-full text-firstcolor font-bold hover:bg-firstcolor hover:text-white" type="button" onClick={() => navigate('/')}>Volver al inicio</button>
            </div>
        </SectionContainer>
    );
}
 
export default NotPage;