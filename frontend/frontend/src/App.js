import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import PrivateRoute from "./utils/PrivateRoute"
import {AuthProvider} from "./context/AuthContext";

import Homepage from "./views/Homepage/Homepage";
import Registerpage from "./views/Registerpage/Registerpage";
import Loginpage from "./views/Loginpage/Loginpage";
import Dashboard from "./views/Dashboard/Dashboard";
import Navbar from "./views/Navbar/Navbar";
import ProfilePage from "./views/Profile/ProfilePage";




function App() {
  return (
      <div className={"App"}>
          <Router>
              <AuthProvider>
                    <Navbar/>
                  <Switch>
                      <Route component={Loginpage} path="/login"/>
                      <Route component={Registerpage} path="/register" exact/>
                          <Route component={Homepage} path="/" exact/>
                      <Route component={ProfilePage} path="/profile" exact/>
                          <PrivateRoute component={Dashboard} path="/dashboard" exact/>
                  </Switch>
              </AuthProvider>
          </Router>
      </div>
      )
          }
export default App