import React from "react";
import {useContext} from "react";
import './style.css'
import './script'
import { jwtDecode } from 'jwt-decode'
import AuthContext from "../../context/AuthContext";
import {Link} from "react-router-dom";


function Navbar() {

    const {user, logoutUser} = useContext(AuthContext)
  const token = localStorage.getItem("authTokens")

  if (token) {
    const decoded = jwtDecode(token)
    var user_id = decoded.user_id
  }

    return (
        <div>
          <>
            <div className="area"/>
            <nav className="main-menu">
              <ul>
                <li>
                  <a href="https://jbfarrow.com">
                    <i className="fa fa-home fa-2x"/>
                    <span className="nav-text">Community Dashboard</span>
                  </a>
                </li>
                <li className="has-subnav">
                  <a href="#">
                    <i className="fa fa-globe fa-2x"/>
                    <span className="nav-text">Global Surveyors</span>
                  </a>
                </li>
                <li className="has-subnav">
                  <a href="#">
                    <i className="fa fa-comments fa-2x"/>
                    <span className="nav-text">Group Hub Forums</span>
                  </a>
                </li>
                <li className="has-subnav">
                  <a href="#">
                    <i className="fa fa-camera-retro fa-2x"/>
                    <span className="nav-text">Survey Photos</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-film fa-2x"/>
                    <span className="nav-text">Surveying Tutorials</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book fa-2x"/>
                    <span className="nav-text">Surveying Jobs</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-cogs fa-2x"/>
                    <span className="nav-text">Tools &amp; Resources</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-map-marker fa-2x"/>
                    <span className="nav-text">Member Map</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-info fa-2x"/>
                    <span className="nav-text">Documentation</span>
                  </a>
                </li>
              </ul>
              {token === null &&
                  <>
              <ul className="register">
                <li>
                  <a href="/register">
                    <i className="fa fa-user fa-2x"></i>
                    <span className="nav-text">Sign in</span>
                  </a>
                </li>
              </ul>
                </>
              }
              {token !== null &&
                  <>
                    <ul className="logout">
                      <li>
                        <a href="/" onClick={logoutUser} style={{cursor: "pointer"}}>
                          <i className="fa fa-power-off fa-2x"/>
                          <span className="nav-text">Logout</span>
                        </a>
                      </li>
                    </ul>
                  </>
              }
            </nav>
          </>
          <script src="https://kit.fontawesome.com/46a11addf1.js" crossOrigin="anonymous"></script>


        </div>
    )
}

export default Navbar