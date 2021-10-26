import React from "react";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import ListItems from "./ListItems";
import AddItems from "./AddItems";
import Categories from "./Categories";
import ListOrders from "./ListOrders";
import ListClients from "./ListClients";
import AddOrders from "./AddOrders";
import AddClient from "./AddClient";
import { ProtectedRoute } from '../ProtectedRoute';
import Button from 'react-bootstrap/Button';

const LandingPage = () => {
    const history = useHistory();

    const handleClick = () =>{
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      history.push('/')
    }

    return (
      <Router>
        <div class="container-fluid">
          <div style={{float: "right"}}>
          <Button variant="primary" onClick={handleClick}>Logout</Button>
          </div>
          <div class="row flex-nowrap">
            <Sidebar />
              <div class="col py-3">
                <Switch>
                  <ProtectedRoute exact path="/home" component={ListItems} />
                  <ProtectedRoute exact path="/list_items" component={ListItems} />
                  <ProtectedRoute exact path="/add_item" component={AddItems} />
                  <ProtectedRoute exact path="/categories" component={Categories} />
                  <ProtectedRoute exact path="/list_orders" component={ListOrders} />
                  <ProtectedRoute exact path="/list_clients" component={ListClients} />
                  <ProtectedRoute exact path="/add_client" component={AddClient} />
                  <ProtectedRoute exact path="/add_order" component={AddOrders} />
                </Switch> 
              </div>
          </div>
        </div>
      </Router>
        );
    }

export default LandingPage; 