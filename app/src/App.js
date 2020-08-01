import React from "react";
import SideNav from "./components/layouts/SideNav";
// import TopNav from "./components/layouts/TopNav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Todos from "./components/routes/Todos";
import Completed from "./components/routes/Completed";
import Trash from "./components/routes/Trash";
import LogIn from "./components/pages/LogIn";
import SignUp from "./components/pages/SignUp";
import AllTodo from "./components/pages/AllTodo";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        {/* <TopNav /> */}
        {/* <SideNav /> */}
      </div>
      <AllTodo />
      <Switch>
        <Route exact path="/todos" component={Todos} />
        <Route exact path="/completed" component={Completed} />
        <Route exact path="/trash" component={Trash} />
      </Switch>
    </Router>
  );
}

export default App;
