import React, {useContext} from "react";
import './style.css'
import { Link } from 'react-router-dom'
import AuthContext from "../../context/AuthContext";

function Loginpage() {

    const {loginUser} = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        email.length > 0 && loginUser(email, password)

        console.log(email)
        console.log(password)

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
            <body className="login">
            <div className="container">
                <div className="login-container-wrapper clearfix">
                    <div className="logo">
                        <i className="fa fa-sign-in"></i>
                    </div>
                    <div className="welcome"><strong>Добро пожаловать, бродяга!</strong>Великое ждет тебя!</div>

                    <form onSubmit={handleSubmit} className="form-horizontal login-form">
                        <div className="form-group relative">
                            <input id="login_email" className="form-control input-lg" type="email" name='email'
                                   placeholder="Введите имя пользователя" required/>
                            <i className="fa fa-user"></i>
                        </div>
                        <div className="form-group relative password">
                            <input id="login_password" className="form-control input-lg" type="password" name='password'
                                   placeholder="Введите пароль" required/>
                            <i className="fa fa-lock"></i>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-success btn-lg btn-block">Войти</button>
                        </div>
                        <div className="checkbox pull-left">
                            <label><input type="checkbox"/> Remember</label>
                        </div>
                        <div className="checkbox pull-right">
                            <label> <a className="forget" href="" title="forget">Forgot your password</a> </label>
                        </div>
                    </form>
                </div>

                <h4 className="text-center">
                    Нет аккаунта?
                   <Link to="/register">
                        Зарегистрироваться
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

export default Loginpage