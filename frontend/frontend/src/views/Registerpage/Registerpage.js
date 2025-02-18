import React from "react";
import './style.css'
import './script.js'
import { Link } from 'react-router-dom'
import AuthContext from "../../context/AuthContext";
import {useState, useContext} from "react";


function Registerpage() {

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const {registerUser} = useContext(AuthContext)

    console.log(email);
    console.log(username);
    console.log(password);
    console.log(password2);


    const handleSubmit = async e => {
        e.preventDefault()
        registerUser(email, username, password, password2)
    }



    return (
        <div>

            <head>
                <meta charSet="UTF-8"/>
                <title>Dark blue Login Page</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel='stylesheet'
                      href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css'/>
                <link rel='stylesheet'
                      href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'/>
                <link rel="stylesheet" href="./style.css"/>

            </head>
            <body>

            <div id="particles-js"></div>
            <body className="register">
            <div className="container">
                <div className="register-container-wrapper clearfix">
                    <div className="logo">
                        <i className="fa fa-sign-in"></i>
                    </div>
                    <div className="welcome"><strong>Еще один бродяга?</strong> Отличные новости!</div>

                    <form onSubmit={handleSubmit} className="form-horizontal register-form">
                        <div className="form-group relative">
                            <input id="login_username" className="form-control input-lg" type="email" onChange={e => setEmail(e.target.value)}
                                   placeholder="Введите Email" required/>
                            <i className="fa fa-user"></i>
                        </div>
                        <div className="form-group relative">
                            <input id="login_username" className="form-control input-lg" type="username" onChange={e => setUsername(e.target.value)}
                                   placeholder="Введите имя пользователя" required/>
                            <i className="fa fa-user"></i>
                        </div>
                        <div className="form-group relative password">
                            <input id="login_password" className="form-control input-lg" type="password" onChange={e => setPassword(e.target.value)}
                                   placeholder="Введите пароль" required/>
                            <i className="fa fa-lock"></i>
                        </div>
                        <div className="form-group relative password">
                            <input id="login_password" className="form-control input-lg" type="password" onChange={e => setPassword2(e.target.value)}
                                   placeholder="Повторите пароль" required/>
                            <i className="fa fa-lock"></i>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-success btn-lg btn-block">Зарегистрироваться
                            </button>
                        </div>
                    </form>
                </div>

                <h4 className="text-center">
                    Already have an account?
                    <Link to="/login">
                        Login Now!
                    </Link>
                </h4>
            </div>

            </body>

            <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'></script>
            <script src='https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'></script>
            <script src="./script.js"></script>

            </body>

        </div>
    )
}

export default Registerpage