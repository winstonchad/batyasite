import React, {useEffect, useState} from 'react';
import project1 from './assets/projectpics/project1.jpg';
import project2 from './assets/projectpics/project2.jpg';
import project3 from './assets/projectpics/project3.jpeg';
import project4 from './assets/projectpics/project4.jpg';
import project5 from './assets/projectpics/project5.jpg';
import project6 from './assets/projectpics/project6.jpeg';

const Portfolio = () => {
    const [projects] = useState([
        {
            id: 1,
            name: "Project 1",
            description: "Description 1",
            image: project1,
            category: 'category1',
        },
        {
            id: 2,
            name: "Project 2",
            description: "Description 2",
            image: project2,
            category: 'category1',
        },
        {
            id: 3,
            name: "Project 3",
            description: "Description 3",
            image: project3,
            category: 'category1',
        },
        {
            id: 4,
            name: "Project 4",
            description: "Description 4",
            image: project4,
            category: 'category1',
        },
        {
            id: 5,
            name: "Project 5",
            description: "Description 5",
            image: project5,
            category: 'category1',
        },
        {
            id: 6,
            name: "Project 6",
            description: "Description 6",
            image: project6,
            category: 'category1',
        },
    ]);

    useEffect(() => {
        document.body.classList.add('portfolio-page');
        return () => {
            document.body.classList.remove('portfolio-page');
        };
    }, []);

    return (
        <div>
            <h2>Portfolio</h2>
            <div className={"portfolio"}>
                {projects.map((project) => (
                    <div key={project.id} className={"project"}>
                        <img src={project.image} alt={project.name} />
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;