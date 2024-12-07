import { useEffect, useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router';
import { useLocation } from "react-router-dom";

export default function Navbar() {

    const [title, updateTitle] = useState("");
    const [lastLetter, setLastLetter] = useState(""); 
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const websiteName = "RDLabs";
    let i = 0;

    const loc = useLocation();

    const typeIn = () => {
        if (i < websiteName.length) {
            const nextLetter = websiteName.charAt(i);
            setLastLetter(`${websiteName.charAt(i+1)}|`);
            updateTitle((old) => old + nextLetter); 
            i++;
            setTimeout(typeIn, 100);
        }
        else {
            setLastLetter("");
        }
    };

    useEffect(() => {
        typeIn(); 

        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
      
        window.addEventListener("resize", handleResize);
      
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav>
        <p id="rdlabs">{title}<i className="type">{lastLetter}</i></p>

        <ul className="navPanel">
            <li className="destination">
                <Link to="/" className={loc.pathname === "/" ? "active" : ""}>{screenWidth > 600 ? "Home" : "🏠︎"}</Link>
            </li>
            <li className="destination">
                <Link to="/academics" className={loc.pathname === "/academics" ? "active" : ""}>{screenWidth > 600 ? "Academics" : "🕮"}</Link>
            </li>
            <li className="destination">
                <Link to="/projects" className={loc.pathname === "/projects" ? "active" : ""}>{screenWidth > 600 ? "Projects" : "</>"}</Link>
            </li>
            {/* <li className="destination">
                <select className='lang'>
                    <option value="en">EN</option>
                    <option value="gr">GR</option>
                    <option value="al">AL</option>
                </select>
            </li>   */}
        </ul>

        {/* <button className="navibutton" onClick={() => openNav((old) => !old)}>⬡</button> */}
        </nav>
    );
}