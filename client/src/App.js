import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GridList from "./GridList";
import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./components/Main";
import ProfilePage from "./components/profile";
import uploadImage from "./components/UploadProfilePic";
function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/test" component={GridList} />
      <Route path="/Profile" component={ProfilePage} />
    </Router>
  );
}

export default App;
