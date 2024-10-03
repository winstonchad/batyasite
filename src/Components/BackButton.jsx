import React from 'react';
import {Link, useLocation} from "react-router-dom";
import '../BackButton.css';
import ArrowIconBack from "./ArrowIconBack";

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
            <ArrowIconBack />
        </Link>
    )
}

export default BackButton;