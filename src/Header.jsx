import React from 'react';
import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    const isMainPage = location.pathname === '/';

    return (
        <header>
            {isMainPage && (
                <div>
                    <ul className={"nav"}>
                        <li>Про Нас</li>
                        <li>Наши Услуги</li>
                        <li><Link to="/portfolio">Портфолио</Link></li>
                        <li><Link to="/contact">Контакты</Link></li>
                    </ul>
                </div>
            )}
            {!isMainPage && (
                <ul className={"nav"}>
                    <li>Про Нас</li>
                    <li>Наши Услуги</li>
                    <li><Link to="/portfolio">Портфолио</Link></li>
                    <li><Link to="/contact">Контакты</Link></li>
                </ul>
            )}
        </header>
    );
}

export default Header;