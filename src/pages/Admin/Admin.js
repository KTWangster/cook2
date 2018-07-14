import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";

class Admin extends Component {
  render() {
    return (
      <Router>
      <div>
             <AdminNav /> 
             <Switch>
  <Route exact path="/AdminSchedule" component={AdminSchedule} />
  <Route exact path="/UpcomingClasses" component={UpcomingClasses} />
  <Route exact path="/EditContent" component={EditContent} />
  </Switch>
  </div>
            </Router>
    )
  }
}

export default Admin;