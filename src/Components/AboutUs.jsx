import React from 'react';
import '../AboutUs.css';
import papaFoto1 from '../assets/papaFoto1.jpg';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="about-us-content">
                <div className="text-block">
                    <h2>Кто мы</h2>
                    <p>
                        Под руководством Дидара Абишева, увлечённого дизайнера с профильным образованием в области архитектуры интерьера, наша команда объединяет талантливых профессионалов, которые разделяют страсть к дизайну и новаторским решениям. За последние десятилетие Дидар завоевал репутацию мастера, который органично сочетает эстетику и практичность, обеспечивая, что каждый проект не только радует глаз, но и идеально соответствует потребностям заказчика.
                    </p>
                    <h3>Наша Философия</h3>
                    <p>
                        Мы уверены, что каждое пространство имеет свою уникальную историю. Наша цель — раскрыть эту историю и воплотить её в жизнь с помощью продуманного дизайна. Будь то уютная квартира, просторный дом или динамичное коммерческое пространство, мы тесно работаем с клиентами, чтобы понять их нужды, пожелания и стиль. Каждый проект мы начинаем с новых идей и внимания к мелочам, создавая интерьеры, которые остаются актуальными и отражают индивидуальность своих владельцев.
                    </p>
                    <a href="/contact" className="contact-link">Contact us</a>
                </div>
                <div className="image-block">
                    <img src={papaFoto1} alt="Design Studio" />
                </div>
            </div>
            <div className="quote-block">
                <p>Based in west London, K&H Design was founded in 2015. Now with a multi-talented team of ten, the studio works closely with private clients to create intelligent interiors.</p>
            </div>
        </div>
    );
};

export default AboutUs;
