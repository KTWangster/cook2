import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";

class UserProfile extends Component {
  render() {
    return (
      <Router>
      <div>
                 <UserProfileNav /> 
             <Switch>
  <Route exact path="/MyAccount" component={MyAccount} />
  <Route exact path="/UpcomingClasses" component={UpcomingClasses} />
  </Switch>
  </div>
            </Router>
    )
  }
}

export default UserProfile;