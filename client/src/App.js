import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./components/Main";
import ProfilePage from "./components/Profile";
import TestProfile from "./components/testProfile";
import updateUserInformation from "./components/updateUserInfo";
import MailForm from "./components/PasswordRecovery";
import SMSForm from "./components/SMSCode";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/verify/mail" component={MailForm} />
      <Route path="/verify/sms" component={SMSForm} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/profile" exact component={ProfilePage} />
      <Route path="/tprofile" exact component={TestProfile} />
      <Route
        path="/Update user Information"
        component={updateUserInformation}
      />
    </Router>
  );
}

export default App;
