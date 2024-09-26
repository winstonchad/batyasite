import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import HeaderStyle from '../HeaderStyle.css';
import arrow from '../assets/arrow.svg';

function BackButton(){
    const location = useLocation();
    const isMainPage = location.pathname === '/';

    if(isMainPage){
        return null;
    }

    const handleClick = () =>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return(
        <Link to={"/"} className={"back-to-main"} onClick={handleClick}>
            <img src={arrow} alt={"Back to main page"} />
        </Link>
    )
}

export default BackButton;