import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import PrivateRoute from "./utils/PrivateRoute"
import {AuthProvider} from "./context/AuthContext";

import Homepage from "./views/Homepage";
import Registerpage from "./views/Registerpage/Registerpage";
import Loginpage from "./views/Loginpage/Loginpage";
import Dashboard from "./views/Dashboard";
import Navbar from "./views/Navbar/Navbar";



function App() {
  return (
     <Router>
       <AuthProvider>
           <Navbar/>
           <Switch>
               <PrivateRoute component={Dashboard} path="/dashboard"/>
               <Route component={Loginpage} path="/login"/>
               <Route component={Registerpage} path="/register"/>


           </Switch>
       </AuthProvider>
     </Router>
  )
}
export default App
