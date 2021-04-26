import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <nav class="navbar">
                <ul class="navbar-nav">

                    <li class="logo">
                            <a className="nav-link">
                        <span class="link-text logo-text">Menu</span>
                        <img src="img/navigation/icon-menu.png"/>
                        </a>
                    </li>
      <li class="nav-item social">
        <a href="https://www.linkedin.com/in/teddy-cl%C3%A9ment/" class="nav-link" target="_blank">
          <img src="img/navigation/icon-linkedin.png"/>
          <span class="link-text">LinkedIn</span>
        </a>
      </li>
      <li class="nav-item social">
        <a href="https://github.com/TeddyEpitechMarseille" class="nav-link" target="_blank">
          <img src="img/navigation/icon-github.png"/>
          <span class="link-text">GitHub</span>
        </a>
      </li>
      <hr className="social-hr"/>
      <li class="nav-item">
      <NavLink exact to="/">
        <a  class="nav-link">
          <img src="img/navigation/icon-home.png"/>
          <span class="link-text">Accueil</span>
        </a>
        </NavLink>
      </li>

      <li class="nav-item">
      <NavLink exact to="/projets">
        <a class="nav-link">
          <img src="img/navigation/icon-project.png"/>
          <span class="link-text">Projets</span>
        </a>
        </NavLink>
      </li>

      <li class="nav-item">
      <NavLink exact to="/a-propos">
        <a href="#" class="nav-link">
          <img src="img/navigation/icon-apropos.png"/>
          <span class="link-text">Parcours</span>
        </a>
        </NavLink>
      </li>

      <li class="nav-item">
        <NavLink exact to="/contact">
        <a href="#" class="nav-link">
          <img src="img/navigation/icon-mail.png"/>
          <span class="link-text">Contact</span>
        </a>
        </NavLink>
      </li>
      <li class="nav-item" id="themeButton">
        <a href="#" class="nav-link">
          <img src="img/navigation/icon-theme.png"/>
          <span class="link-text">Thème</span>
        </a>
      </li>
    </ul>
  </nav>
        </div>
    );
};

export default Navigation;