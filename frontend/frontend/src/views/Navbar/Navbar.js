import React, {useEffect} from "react";
import {useContext} from "react";
import './style.css'
import './script.js'
import { jwtDecode } from 'jwt-decode'
import AuthContext from "../../context/AuthContext";
import {Link, useLocation} from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';



function Navbar() {

  const {user, logoutUser, setUser, updateUser} = useContext(AuthContext);
  const token = localStorage.getItem("authTokens");
  const location = useLocation();


  useEffect(() => {
        if (token && !user) {
            const decoded = jwtDecode(token);
            console.log("Decoded user from token:", decoded);
            setUser(decoded); // Восстанавливаем данные пользователя из токена
        }
    }, [token, user, setUser]);



  useEffect(() => {
    const fetchUserData = async () => {
        const token = JSON.parse(localStorage.getItem("authTokens"))?.access;
        if (token) {
            try {
                const response = await fetch("http://127.0.0.1:8000/api/user/", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const userData = await response.json();
                    updateUser(userData); // Обновляем данные пользователя в контексте
                    console.log("Данные обновлены")
                }
            } catch (error) {
                console.error("Ошибка при загрузке данных пользователя:", error);
            }
        }
    };

    fetchUserData();
}, []);

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
                        <li className={`nav-item ${location.pathname === "/login" ? "active" : ""}`}>
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
                        <li className={`nav-item ${location.pathname === "/profile" ? "active" : ""}`}>
                          <Link className="nav-link" to={'/profile'}>
                            <i className="far fa-user"/>
                            {user ? user.username : "Profile"} {/* Используем данные из контекста */}
                          </Link>
                        </li>
                        <li className={`nav-item ${location.pathname === "/login" ? "active" : ""}`}>
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