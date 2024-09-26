import React from 'react';
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

class App extends React.Component {

    render() {
        return (
            <Router>
                <div className={"wrapper"}>
                    <Header />
                    <Routes>
                        <Route path="/" element={<MainPage/>} />
                        <Route path={"/services"} element={<Services/>}/>
                        <Route path="/aboutus" element={<AboutUs />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;

//TODO: добавить анимации переходов между страницами
//TODO: добавить кнопку возвращения на main page