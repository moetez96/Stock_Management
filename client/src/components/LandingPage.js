import React from "react";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListItems from "./ListItems";
import AddItems from "./AddItems";

const LandingPage = () => {
    
   

    return (
      <Router>
      <div class="container-fluid">
      <div class="row flex-nowrap">
        <Sidebar />
          <div class="col py-3">
          <Switch>
            <Route exact path="/home" component={ListItems} />
            <Route exact path="/list_items" component={ListItems} />
            <Route exact path="/add_item" component={AddItems} />
         </Switch> 
          </div>
        </div>
      </div>
      </Router>
        );
    }

export default LandingPage; 