import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [menu, setMenu] = useState(false);
    const [activeLink, setActiveLink] = useState(JSON.parse(localStorage.getItem("activeLink")) || "");
    const location = useLocation();  

    useEffect(() => {

        if (location.pathname === '/') {
            setActiveLink('');
            localStorage.removeItem('activeLink');  
        }
    }, [location]);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);  
        localStorage.setItem("activeLink", JSON.stringify(link));  
    };

    return (
        <div className={`${styles.header} flex justify-between flex-wrap p-10 items-center bg-slate-950 fixed top-0 right-0 left-0 z-50`}>
            <h1 className="text-white uppercase font-bold text-xl md:text-2xl">
                <Link to="/">start framework</Link>
            </h1>

            <ul className={`md:flex ${menu ? 'flex flex-col absolute left-0 top-full bg-slate-950 w-full ps-9 pb-5 z-50' : 'hidden '} md:items-center menuUl gap-6 transition duration-3000`}>
                <li>
                    <Link 
                        to="/about" 
                        className={`text-white uppercase font-bold p-3 rounded-md ${activeLink === 'about' ? 'bg-green-500' : ''}`}
                        onClick={() => handleLinkClick('about')}>About</Link>
                </li>
                <li>
                    <Link 
                        to="/portfolio" 
                        className={`text-white uppercase font-bold p-3 rounded-md ${activeLink === 'portfolio' ? 'bg-green-500' : ''}`}
                        onClick={() => handleLinkClick('portfolio')}>Portfolio</Link>
                </li>
                <li>
                    <Link 
                        to="/contact" 
                        className={`text-white uppercase font-bold p-3 rounded-md ${activeLink === 'contact' ? 'bg-green-500' : ''}`}
                        onClick={() => handleLinkClick('contact')}>Contact</Link>
                </li>
            </ul>

            <i onClick={toggleMenu} className="fa-solid fa-bars text-black border-2 border-black p-4 text-3xl rounded-lg cursor-pointer"></i>
        </div>
    );
}

export default Header;
