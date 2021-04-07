import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./components/Main";
import TestProfile from "./components/testProfile";
import Table from "./components/table";
import UploadRealEstateRequest from "./components/notFoundRealestate";
import updateUserInformation from "./components/updateUserInfo";
import MailForm from "./components/MailCode";
import SMSForm from "./components/SMSCode";
import Lands from "./components/Lands";
import Villas from "./components/Villas";
import Roof from "./components/Roof";
import Shop  from "./components/Shop";
import Office  from "./components/Office";
import Apartment  from "./components/Apartments";
import Success from "./components/Success";
import Recover from "./components/PasswordRecovery";
import UploadProfilePic from "./components/FilesUploadComponent";
import FilesUpload from "./components/FilesUpload";
import uploadRealEstate from "./components/uploadRealEstate";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/Lands" exact component={Lands} />
      <Route path="/Villas" exact component={Villas} />
      <Route path="/Roof" exact component={Roof} />
      <Route path="/Shop" exact component={Shop} />
      <Route path="/Office" exact component={Office} />
      <Route path="/Apartment" exact component={Apartment}/> 

      <Route path="/salam" component={FilesUpload} />
      <Route path="/verify/mail" component={MailForm} />
      <Route path="/verify/sms" component={SMSForm} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/table" component={Table} />
      <Route path="/uploadNewRealEstate" component={uploadRealEstate} />
      <Route
        path="/uploadNewRealEstateRequest"
        component={UploadRealEstateRequest}
      />
      <Route path="/success" component={Success} />
      <Route path="/newPassword" component={Recover} />
      <Route path="/tprofile" exact component={TestProfile} />
      <Route path="/upload" component={UploadProfilePic} />
      <Route
        path="/Update user Information"
        component={updateUserInformation}
      />
    </Router>
  );
}

export default App;
