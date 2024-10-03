import React, {useEffect, useState} from 'react';
import './Services.css';
import ArrowIconOpen from "./ArrowIconOpen";

const services = [
    { id: 1, title: 'Консультации по дизайну интерьера', description: 'Мы предлагаем индивидуальные консультации для разработки вашего уникального интерьера. Наши дизайнеры помогут вам определить стиль, цветовые решения и материалы, которые лучше всего подходят для вашего проекта.<br />' +
            '<br />\u2022 Первичная консультация с клиентом для обсуждения потребностей, стиля, бюджета и сроков.<br />\u2022 ' +
            'Разработка концептуального дизайна, включая общее настроение пространства, цветовую палитру, выбор мебели и отделочных материалов.<br /> \u2022 ' +
            'Разработка функциональных планировок помещений.', image: 'path/to/image1.jpg' },
    { id: 2, title: '2D-3D-визуализация', description: 'Наши специалисты создадут концептуальный дизайн вашего пространства, включая 3D-визуализации и рабочие чертежи. Мы предложим функциональные и эстетические решения для вашего дома или офиса.<br/><br/>' +
            '' +
            '\u2022 Создание 3D-визуализаций интерьера, чтобы клиент мог увидеть, как будет выглядеть конечный результат до начала работ.<br />' +
            'Разработка полного комплекта чертежей и спецификаций для строительных и ремонтных работ.<br /> \u2022 ' +
            'План электрики, сантехники, потолков, полов и освещения.<br /> \u2022' +
            '', image: 'path/to/image2.jpg' },
    { id: 2, title: 'Ремонт "под ключ"', description: 'Мы организуем и проведем все ремонтные работы под ключ, начиная от черновой отделки и заканчивая финальной декорацией. Весь процесс контролируется нашими специалистами, чтобы результат превзошел ваши ожидания.<br/><br/>' +
            '\u2022 Полный цикл работ от начала ремонта до сдачи готового объекта, включая выполнение всех строительных и отделочных работ.<br />\u2022 ' +
            'Координация работы подрядчиков, включая электриков, сантехников, маляров и других специалистов.', image: 'path/to/image2.jpg' },
    { id: 2, title: 'Декорирование и финальная отделка', description: '\u2022 Подбор и размещение декоративных элементов, текстиля, произведений искусства и других аксессуаров.<br />\u2022 ' +
            'Финальная настройка интерьера для создания уютной атмосферы.', image: 'path/to/image2.jpg' },
];

function Services() {

    useEffect(() => {
        document.body.classList.add('services-page');
        return () => {
            document.body.classList.remove('services-page');
        };
    }, []);

    const [openServiceId, setOpenServiceId] = useState(null);

    const toggleService = (id) => {
        setOpenServiceId(openServiceId === id ? null : id);
    };

    return (
        <div className="services-page">
            <h1>Наши Услуги</h1>
            <ul className="services-list">
                {services.map(service => (
                    <li key={service.id} className="service-item">
                        <div className="service-header" onClick={() => toggleService(service.id)}>
                            <h2>{service.title}</h2>
                            <ArrowIconOpen />
                        </div>
                        {openServiceId === service.id && (
                            <div className="service-details">
                                <p dangerouslySetInnerHTML={{ __html: service.description }}></p>
                                <img src={service.image} alt={service.title} />
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Services;