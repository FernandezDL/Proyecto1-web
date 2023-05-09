import React, { useState } from 'react';
import "./Navbar.css"
import DropDownMenu from './DropDownMenu';

function Navbar(){
    const [openMenu, setOpenMenu] = useState(false);
    const [hovered, setHovered] = useState(false);

    return (
        <>
            <nav>
                <h1>duolingo</h1>

                <button className='languageBttn'
                    onClick={() => setOpenMenu((prev) => !prev)}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>

                        <h2>IDIOMA DE LA PÁGINA: ESPAÑOL </h2>
                </button>

                {
                (openMenu || hovered) && <DropDownMenu/>
                }
            </nav>
        </>
    );
}

export default Navbar; 