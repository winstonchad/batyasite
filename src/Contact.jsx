import React, {useEffect} from  'react';
import { Link, useLocation } from 'react-router-dom';

function Contact() {
    useEffect(() => {
        document.body.classList.add('contact-page');
        return () => {
            document.body.classList.remove('contact-page');
        };
    }, []);

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted: ", formData);
    }

    return (
        <div className={"contact"}>
            <div className={"interes"}>Заинтересованы? Свяжитесь с нами</div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor={"name"}>Ваше Имя:</label>
                    <input
                        type={"text"}
                        id={"name"}
                        name={"name"}
                        value={formData.name}
                        onChange={handleChange}
                        required
                        />
                </div>
                <div>
                    <label htmlFor={"email"}>Ваш Email:</label>
                    <input
                        type={"email"}
                        id={"email"}
                        name={"email"}
                        value={formData.email}
                        onChange={handleChange}
                        required
                        />
                </div>
                <div>
                    <label htmlFor={"phone"}>Ваш Телефон (опционально):</label>
                    <input
                        type={"tel"}
                        id={"phone"}
                        name={"phone"}
                        value={formData.phone}
                        onChange={handleChange}
                        />
                </div>
                <div>
                    <label htmlFor={"message"}>Расскажите о себе:</label>
                    <textarea
                        id={"message"}
                        name={"message"}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        />
                </div>
                <button type={"submit"}>Отправить</button>
            </form>
        </div>
    )
}

export default Contact;