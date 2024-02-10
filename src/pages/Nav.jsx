import { Link, useLocation } from 'react-router-dom';


const Nav = () => {
    const location = useLocation()

    const isContactPage = location.pathname === '/contact'
    const isIndexPage = location.pathname === '/'

    return (
        <>
            {
                !isIndexPage & !isContactPage ? <></> :
                    <nav className="text-center border-2 border-white rounded-full 
                        py-4 font-bold backdrop-filter backdrop-blur-sm">
                        <ul className="flex flex-column justify-evenly lg:text-2xl">
                            <li className=' lg:hover:scale-125'><Link to='/'>Inicio</Link></li>
                            {isContactPage ?
                                <></> : <>
                                    <li className=' lg:hover:scale-125'><a href='#projects'>Proyectos</a></li>
                                    <li className=' lg:hover:scale-125' ><a href='#about'>Sobre mí</a></li>
                                </>
                            }
                            <li className=' lg:hover:scale-125'><Link to='contact'>Contacto</Link></li>
                        </ul>
                    </nav>
            }
        </>
    );
}

export default Nav;