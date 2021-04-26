import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";
import React, { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    })    
    return (
        <>
        <Navigation/>
        <div className="home">
            <section className="home-content">
                <div className="div-img">
                    <img className="img-profil" src="img/profil.jpg" alt="photo de teddy clément" />      
                </div>
                <div className="div-content">
                    <h1>Hello ! Moi c'est <span>Teddy Clément</span></h1>
                    <h2>Étudiant Epitech &amp;<br/> Développeur Front-end</h2>
                    <h3 className="title-content">Mon objectif ?<br/>
                    Accélérer et faciliter vos recherches en créant des plateformes plus intuitives. Rendre votre activité sur le web plus agréable.</h3>
                    <div className="action">
                        <a className="button" href="contact">Me contacter</a>
                        <a className="button" href="img/CV-Teddy-Clément.pdf" download>Télécharger mon CV</a>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

export default Home;