import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./components/Main";
import ProfilePage from "./components/Profile";
import TestProfile from "./components/testProfile";
import uploadRealEstate from "./components/uploadRealEstate";
import updateUserInformation from "./components/updateUserInfo";
import UploadRealEstateRequset  from "./components/notFoundRealestate";
import PasswordRecovery from "./components/PasswordRecovery";
import Table from "./components/Table";



function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/profile" exact component={ProfilePage} />
      <Route path="/table" exact component={Table} />
      <Route path="/tprofile" exact component={TestProfile} />
      <Route path="/uploadNewRralEstate" exact component={uploadRealEstate} />
      <Route path="/uploadNewRralEstateRequest" exact component={UploadRealEstateRequset} />


      <Route
        path="/Update user Information"
        component={updateUserInformation}
      />
      <Route path="/recover" component={PasswordRecovery} />
    </Router>
  );
}

export default App;
