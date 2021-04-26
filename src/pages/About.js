import React, { useEffect } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
const About = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    })
    return (
        <>
        <Navigation/>        
        <div className="about">
          <div className="about-content">
          <h2>Expériences - Formations</h2>
            <div className="block">
                <h4><img src="img/icon-business.png"/><a class="light dark">Développeur front end</a></h4>
                <p>8 mois d'alternance en tant que développeur front end sur un SAAS de recrutement dans une entreprise à Marseille. Gestion du front d'une centaine de client.</p>
                <span>Twig</span>
                <span>Less</span>
                <span>JavaScript</span>
                <span>Symfony</span>
                <span>Docker</span>
            </div>
            <div className="block">
                <h4><img src="img/icon-business.png"/><a class="light dark">Intégrateur WordPress</a></h4>
                <p>Une année d'alternance en tant qu'intégrateur WordPress dans une agence web à Aix-en-Provence. Réalisation de newsletter avec MailChimp et création de site WordPress.</p>
                <span>Css</span>
                <span>WordPress</span>
                <span>MailChimp</span>
                <span>Elementor</span>
            </div>
            <div className="block">
                <h4><img src="img/icon-formation.png"/><a class="light dark">Epitech Marseille Msc PRO</a></h4>
                <p>Préparation d'une titre RCNP de niveau 1 : Architecte logiciel, développeur d'application (bac +5). L'objectif de mon entrée à Epitech est de progresser en programmation.</p>
                <span>DevOps</span>
                <span>React</span>
                <span>Java</span>
                <span>JavaScript</span>
            </div>
            <div className="block">
                <h4><img src="img/icon-formation.png"/><a class="light dark">ECV Chargé de Projet Digital</a></h4>
                <p>Pour mon bac+3, j'ai décidé de m'orienter vers une licence professionnelle en alternance. Je souhaitais découvrir les métiers liés à internet (UI Designer, UX Designer, Développeur Web...).</p>
                <span>Marketing</span>
                <span>Design UI</span>
                <span>Social Media</span>
                <span>Adobe XD</span>
            </div>
            <div className="block">
                <h4><img src="img/icon-formation.png"/><a class="light dark">Lycée Saint-Michel BTS SNIR</a></h4>
                <p>Cette formation m'a fait découvrir le développement web (les variables, les fonctions, les objets, les échanges client/serveur) et également la partie réseaux/sécurité. J'ai découvert de nombreux langages (C++, C#, JavaScript, Xaml, PHP...).</p>
                <span>Less</span>
                <span>JavaScript</span>
                <span>Symfony</span>
                <span>Docker</span>
            </div>
            <div className="block">
                <h4><img src="img/icon-business.png"/><a class="light dark">Stage BTS SN CIBC Alpes Provence</a></h4>
                <p>En juillet 2017, j'ai eu l'opportunité d'obtenir une première expérience professionnelle. J'ai réalisé le site internet de l'entreprise CIBC Alpes Provence. Le site est actuellement en ligne : visiter le site. Ce fut mon premier projet concret !</p>
                <span>Bootstrap</span>
                <span>Html</span>
                <span>Css</span>
                <span>Php</span>
            </div>
          </div>
        </div>
        </>
    );
};

export default About;