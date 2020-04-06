import React from "react";
import CoursesPage from "./CoursesPage";
import Header from "./common/Header";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      {console.log("test")}
      <Header />
      <Switch>
        <Route path="/" exact component={CoursesPage}></Route>
        <Route path="/courses" component={CoursesPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
