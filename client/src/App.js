import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./components/Main";
import TestProfile from "./components/testProfile";
import updateUserInformation from "./components/updateUserInfo";
import MailForm from "./components/MailCode";
import SMSForm from "./components/SMSCode";
import Success from "./components/Success";
import Recover from "./components/PasswordRecovery";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/verify/mail" component={MailForm} />
      <Route path="/verify/sms" component={SMSForm} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/success" component={Success} />
      <Route path="/newPassword" component={Recover} />
      <Route path="/tprofile" exact component={TestProfile} />
      <Route
        path="/Update user Information"
        component={updateUserInformation}
      />
    </Router>
  );
}

export default App;
