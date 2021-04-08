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
import Houses from "./components/Houses";
import Roofs from "./components/Roofs";
import Shops from "./components/Shops";
import Offices from "./components/Offices";
import Apartments from "./components/Apartments";
import Success from "./components/Success";
import Recover from "./components/PasswordRecovery";
import UploadProfilePic from "./components/FilesUploadComponent";
import FilesUpload from "./components/FilesUpload";
import uploadRealEstate from "./components/uploadRealEstate";

function App() {
  return (
    <Router>
      <Route path="/lands" exact component={Lands} />
      <Route path="/villas" exact component={Villas} />
      <Route path="/roofs" exact component={Roofs} />
      <Route path="/shops" exact component={Shops} />
      <Route path="/offices" exact component={Offices} />
      <Route path="/houses" exact component={Houses} />
      <Route path="/apartments" exact component={Apartments} />
      <Route path="/" exact component={Main} />
      <Route path="/upload/media" component={FilesUpload} />
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
      <Route path="/tprofile" component={TestProfile} />
      <Route path="/upload" exact component={UploadProfilePic} />
      <Route
        path="/Update user Information"
        component={updateUserInformation}
      />
    </Router>
  );
}

export default App;
