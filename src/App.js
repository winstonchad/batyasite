import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from "./Components/MainPage";
import Footer from './Components/Footer.jsx';
import Header from "./Components/Header";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import './index.css';
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <Router>
            <div className={"wrapper"}>
                <div className={menuOpen ? 'menu-open' : 'menu-closed'}>
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
            </div>

        </Router>
    );
}

export default App;

//TODO: добавить анимации переходов между страницами
// TODO: доделать дизайн для страницы Про нас, доделать кнопку "Contact us" и фотку отредактировать
// TODO: доделать дизайн для страницы Услуги
