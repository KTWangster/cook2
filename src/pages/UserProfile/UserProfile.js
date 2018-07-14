import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserProfileNav from "../../components/UserProfileNav";
import MyAccount from "../MyAccount";
import UpcomingClasses from "../UpcomingClasses";

class UserProfile extends Component {
  render() {
    return (
      <div>
                 <UserProfileNav /> 
             <Switch>
  <Route exact path="/MyAccount" component={MyAccount} />
  <Route exact path="/UpcomingClasses" component={UpcomingClasses} />
  </Switch>
  </div>
    )
  }
}

export default UserProfile;