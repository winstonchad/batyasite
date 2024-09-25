import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    const isMainPage = location.pathname === '/';
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <div className="menu-icon" onClick={toggleMenu}>
                &#9776;
            </div>
            <ul className={`nav ${menuOpen ? 'open' : ''}`}>
                <li><Link to="/aboutus">Про Нас</Link></li>
                <li>Наши Услуги</li>
                <li><Link to="/portfolio">Портфолио</Link></li>
                <li><Link to="/contact">Контакты</Link></li>
            </ul>
        </header>
    );
}

export default Header;