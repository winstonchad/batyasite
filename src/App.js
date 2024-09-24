import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from "./MainPage";
import Footer from './Footer.jsx';
import Header from "./Header";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import './index.css';

class App extends React.Component {

    render() {
        return (
            <Router>
                <div className={"wrapper"}>
                    <Header />
                    <Routes>
                        <Route path="/" element={<MainPage/>} />
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