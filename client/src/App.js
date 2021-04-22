import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PrivateRoute from './components/routes/PrivateRoute';
import PrivateScreen from "./components/screens/PrivateScreen"
import LoginScreen from "./components/screens/LoginScreen"
import RegisterScreen from "./components/screens/RegisterScreen"
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen"
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen"


function App() {
  return (
   
      <Router>
        <div className="app">
          <Switch>
            <PrivateRoute exact path="/" component={PrivateScreen} />
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/register" component={RegisterScreen} />
            <Route exact path="/forgotpassword" component={ForgotPasswordScreen} />
            <Route exact path="/passwordreset/:resetToken" component={ResetPasswordScreen} />
          </Switch>
        </div>
      </Router>
     
   
  );
}

export default App;

// install react-router-dom, axios