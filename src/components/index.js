import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menubar from "./menu";
import Homepage from "./home";
import Schedule from "./schedule";
import Numbergrid from "./number-grid";
import Postinfo from "./postdata";
function Page() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Switch>
            <Route exact path="/" component={Numbergrid} />
            <Route path="/home" component={Homepage} />
            <Route path="/menu" component={Menubar} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/postinfo/:id" component={Postinfo} />
            <Route path="/:id" component={Child} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
function Child({ match }) {
  return (
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
  );
}

export default Page;
