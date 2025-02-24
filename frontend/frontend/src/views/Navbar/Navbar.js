import React from "react";
import {useContext} from "react";
import './style.css'
import './script.js'
import { jwtDecode } from 'jwt-decode'
import AuthContext from "../../context/AuthContext";
import {Link, useLocation} from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';



function Navbar() {

    const {user, logoutUser} = useContext(AuthContext)
  const token = localStorage.getItem("authTokens")
  const location = useLocation();

  if (token) {
    const decoded = jwtDecode(token)
    var user_id = decoded.user_id
    var user_id = decoded.user_id
      var username = decoded.username
      var full_name = decoded.full_name
      var image = decoded.image
  }

    return (
        <div>
          <>
            <meta charSet="UTF-8"/>
            <title>bootstrap 4 navbar</title>
            <meta charSet="UTF-8"/>
            <meta
                name="viewport"
                content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
            />
            <head>
              <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
              <script src="https://kit.fontawesome.com/46a11addf1.js" crossOrigin="anonymous"></script>
              <link
                  rel="stylesheet"
                  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
              />
              <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css"
              />
            </head>
            <link rel="stylesheet" href="./style.css"/>
            {/* partial:index.partial.html */}
            <nav className="navbar navbar-expand-custom navbar-mainbg">
              <a className="navbar-brand navbar-logo" href="#">
                Navbar
              </a>
              <button
                  className="navbar-toggler"
                  type="button"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
              >
                <i className="fas fa-bars text-white"/>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <div className="hori-selector">
                    <div className="left"/>
                    <div className="right"/>
                  </div>
                  <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
                    <Link className="nav-link" to={"/"}>
                      <i className="far fa-address-book"/>
                      Homepage
                    </Link>
                  </li>

                  {token === null &&
                      <>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/login"} href="javascript:void(0);">
                      <i className="fa fa-sign-in-alt"/>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/register"} href="javascript:void(0);">
                      <i className="fa fa-user"/>
                      Register
                    </Link>
                  </li>
                  </>
              }


                  {token !== null &&
                      <>
                        <li className={`nav-item ${location.pathname === "/dashboard" ? "active" : ""}`}>
                          <Link className="nav-link" to={'/dashboard'}>
                            <i className="fas fa-tachometer-alt"/>
                            Dashboard
                          </Link>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="javascript:void(0);">
                            <i className="far fa-clone"/>
                            Components
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="javascript:void(0);">
                            <i className="far fa-calendar-alt"/>
                            Calendar
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="javascript:void(0);">
                            <i className="far fa-chart-bar"/>
                            Charts
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/profile">
                            <i className="far fa-user"/>
                            {username}
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" onClick={logoutUser} style={{cursor: "pointer"}}
                             href="javascript:void(0);">
                            <i className="fa fa-sign-out-alt"></i>
                          </a>
                        </li>
                      </>
                  }
                </ul>
              </div>
            </nav>
            {/* partial */}
          </>

        </div>
    )
}

export default Navbar