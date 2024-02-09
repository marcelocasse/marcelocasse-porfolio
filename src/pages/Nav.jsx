import { Link, useLocation } from 'react-router-dom';


const Nav = () => {
    const location = useLocation()

    const isContactPage = location.pathname === '/contact'

    return (
        <nav className="text-center border-2 border-white rounded-full 
            py-4 font-bold backdrop-filter backdrop-blur-sm">
            <ul className="flex flex-column justify-evenly lg:text-2xl">
                <li className=' lg:hover:scale-125'><Link to='/'>Home</Link></li>
                { isContactPage ?
                    <></> : <>   
                    <li className=' lg:hover:scale-125'><a href='#projects'>Projects</a></li>
                    <li className=' lg:hover:scale-125' ><a href='#about'>About</a></li>
                    </> 
                }
                <li className=' lg:hover:scale-125'><Link to='contact'>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;