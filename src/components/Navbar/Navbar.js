import { useEffect, useState } from 'react';
import './Navbar.css'

export default function Navbar() {

    const [title, updateTitle] = useState("");
    const [lastLetter, setLastLetter] = useState(""); 

    const websiteName = "RDLabs";
    let i = 0;

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
    }, []);

    return (
        <nav>
        <p id="rdlabs">{title}<i className="type">{lastLetter}</i></p>

        <ul className="navPanel">
            <li className="destination">
                Home
            </li>
            <li className="destination">
                Education
            </li>
            <li className="destination">
                Projects
            </li>
            {/* <li className="destination">
                <select className='lang'>
                    <option value="en">EN</option>
                    <option value="gr">GR</option>
                    <option value="al">AL</option>
                </select>
            </li>   */}
        </ul>
        </nav>
    );
}