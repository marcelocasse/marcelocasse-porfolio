import { Link, useLocation } from 'react-router-dom';


const Nav = () => {
    const location = useLocation()

    const isContactPage = location.pathname == '/contact'

    return (
        <nav className="text-center border-2 border-white rounded-full 
            py-[15px] font-bold backdrop-filter backdrop-blur-sm">
            <ul className="flex flex-column justify-evenly text-2xl">
                <li className=' hover:scale-125'><Link to='/'>Home</Link></li>
                { isContactPage ?
                    <></> : <>   
                    <li className=' hover:scale-125'><a href='#projects'>Projects</a></li>
                    <li className=' hover:scale-125' ><a href='#about'>About</a></li>
                    </> 
                }
                <li className=' hover:scale-125'><Link to='contact'>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;