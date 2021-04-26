import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';

const Projects = () => {

useEffect(() => {
    window.scrollTo(0,0)
})
    return (
        <>
        <Navigation/>
        <div className="projects">
            <div className="projects-content">
                <h2>Projets</h2>
                <ul className="cards">
                    <li className="card-item">
                        <div className="card">
                            <img src="img/projets/project-epichat.png" alt="projet"/>
                            <div className="card-content">
                                <h4>Epichat</h4>
                                <p>Création d'une application web de chat en temps réel, utilisation de socket.io.</p>
                                <div className="action">
                                    <a href="#" className="button">Voir sur GitHub</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card-item">
                        <div className="card">
                            <img src="img/projets/project-jobboard.png" alt="projet"/>
                            <div className="card-content">
                                <h4>Job Board</h4>
                                <p>Application web de recherche d'emploi, premier projet utilisant NodeJS et Express.</p>
                                <div className="action">
                                    <a href="#" className="button">Voir sur GitHub</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card-item">
                        <div className="card">
                            <img src="img/projets/project-smart-parking.png" alt="projet"/>
                            <div className="card-content">
                                <h4>Smart Parking</h4>
                                <p>Application mobile dédié à la gestion d'un parking, utlisation du framework Xamarin.</p>
                                <div className="action">
                                    <a className="button disabled">Voir sur GitHub</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card-item">
                        <div className="card">
                            <img src="img/projets/project-ubwac.png" alt="projet"/>
                            <div className="card-content">
                                <h4>UBWAC</h4>
                                <p>Création d'un site WordPress pour des conférences de vin sur Dijon.</p>
                                <div className="action">
                                    <a href="https://ubwac.com/" target="_blank" className="button">Voir en ligne</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card-item">
                        <div className="card">
                            <img src="img/projets/project-portfolio.png" alt="projet"/>
                            <div className="card-content">
                                <h4>Portfolio V1</h4>
                                <p>Première version de mon portfolio avec React, utilisation de Sass.</p>
                                <div className="action">
                                    <a href="#" className="button">Voir sur GitHub</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card-item">
                        <div className="card">
                            <img src="img/projets/project-cibc.png" alt="projet"/>
                            <div className="card-content">
                                <h4>CIBC Alpes Provence</h4>
                                <p>Réalisation d'un site vitrine pour une entreprise de reconversion professionnelle.</p>
                                <div className="action">
                                    <a className="button disabled">Voir en ligne</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
};

export default Projects;