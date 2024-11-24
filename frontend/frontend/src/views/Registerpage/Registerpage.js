import React from "react";
import './style.css'
import './script.js'

function Registerpage() {
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
                    <div className="welcome"><strong>New user?</strong> Great news!</div>

                    <form className="form-horizontal login-form">
                        <div className="form-group relative">
                            <input id="login_username" className="form-control input-lg" type="email"
                                   placeholder="Username" required/>
                            <i className="fa fa-user"></i>
                        </div>
                        <div className="form-group relative password">
                            <input id="login_password" className="form-control input-lg" type="password"
                                   placeholder="Password" required/>
                            <i className="fa fa-lock"></i>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-success btn-lg btn-block">Login</button>
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
                    <a target="_blank" href="https://codepen.io/Peeyush200/pen/mLwvJB">
                        Check out Social login form
                    </a>
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