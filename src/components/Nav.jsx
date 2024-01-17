import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="text-center border-2 border-white rounded-full py-[15px] mt-[2rem] mb-[10rem] font-bold font-Nunito">
            <ul className="flex justify-evenly text-[1.5rem]">
                <li><Link to=''>Home</Link></li>
                <li><Link to='#projects'>Projects</Link></li>
                <li><Link to='#about'>About</Link></li>
                <li><Link to='contact'>Contact</Link></li>
            </ul>
        </nav>
    );
}
 
export default Nav;