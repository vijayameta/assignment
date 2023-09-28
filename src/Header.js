import React, { useState } from 'react';

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="header bg-black text-white">
            <div className="text-inherit-100 inline-flex flex-col md:flex-row items-start justify-start" style={{ gap: 120, marginTop: 20 }}>
                <div className="logo flex justify-center items-center gap-300">Logo</div>
                <div className={`md:flex md:space-x-10 ${showMenu ? 'hidden' : 'block'}`}>
                    <ul className="text-gray-500 md:inline-flex md:space-x-10 md:space-y-0 space-y-2">
                        <li><a href="#">Solution</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Culture</a></li>
                    </ul>
                </div>
                <ul className='mx-14'>
                    <li className="flex justify-center items-center gap-300"><a href='#'>Contact Us</a></li>
                </ul>
                <div className={`md:hidden ${showMenu ? 'block' : 'hidden'}`}>
                    <button onClick={toggleMenu}>☰ Menu</button>
                </div>
            </div>
        </div>
    );
}

export default Header;
