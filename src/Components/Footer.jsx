import React, {useEffect} from 'react';

export default function Footer() {
    useEffect(() => {
        document.body.classList.add('rights-reserved');
        return () => {
            document.body.classList.remove('rights-reserved');
        };
    }, []);
    return (
        <footer>
            <div className={"footer"}>
                <span>© 2024 Amakot Inc. <br/>
                Все права защищены <br/>
                Еретики будут наказаны. Во имя Императора</span>

            </div>
        </footer>
    );
}

