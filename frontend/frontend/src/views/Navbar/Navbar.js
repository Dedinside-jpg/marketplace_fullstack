import React from "react";
import {Link} from "react-router-dom";
import './style.css'
import './script'


function Navbar() {
    return (
    <div>
      <>
        <meta charSet="UTF-8"/>
        <title>Bricks.io - Homepage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link
            rel="shortcut icon"
            type="image/png"
            href="https://image.ibb.co/fOur3b/favicon.png"
        />
        <meta name="theme-color" content="#3a9fff"/>
        <link rel="stylesheet" href="./style.css"/>

        <meta name="theme-color" content="#1885ed"/>
        <title>Bricks.io - Homepage</title>
        <header className="header">
          <div className="container header__container">
            <div className="header__logo">
              <img
                  className="header__img"
                  src="https://image.ibb.co/kcVou6/path3000.png"
              />{" "}
              <h1 className="header__title">
                Bricks<span className="header__light">.io</span>
              </h1>
            </div>
            <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
            <div className="header__menu">
              <nav id="navbar" className="header__nav collapse">
                <ul className="header__elenco">
                  <li className="header__el">
                    <a href="#" className="header__link">
                      Home
                    </a>
                  </li>
                  <li className="header__el">
                    <a href="#" className="header__link">
                      Pricing
                    </a>
                  </li>
                  <li className="header__el">
                    <a href="#" className="header__link">
                      Success stories
                    </a>
                  </li>
                  <li className="header__el">
                    <a href="#" className="header__link">
                      Blog
                    </a>
                  </li>
                  <li className="header__el">
                    <a href="#" className="header__link">
                      Contact us
                    </a>
                  </li>
                  <li className="header__el header__el--blue">
                    <a href="" className="btn btn--white">
                      Sign In →
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
          <script src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js'></script>
          <script src="./script.js"></script>

        </header>
      </>

    </div>
    )
}

export default Navbar