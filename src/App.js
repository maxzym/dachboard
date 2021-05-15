import React, { useContext } from 'react';
import Home from './component/content/Home'
import { Switch, Route } from "react-router-dom";
import Sidebar from './component/layout/Sidebar';
import EditItem from './component/content/EditItem';
import Order from './component/content/Order';
import Navbar from './component/layout/Navbar';

import DachBoard from './component/content/DachBoard';
import ViewDetail from './component/content/ViewDetail';

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="container-fluid">
        <Switch>
          
          <Route path="/edit/:id" >
            <EditItem />
          </Route>
          <Route path="/order" >
            <Order />
          </Route>
          <Route path="/[[" >
            <Home />
          </Route>
          <Route path="/55" >
            <DachBoard />
          </Route>
          <Route path="/" >
            <ViewDetail />
          </Route>
          
        </Switch>
      </div>

    </div>
  )
}


export default App;
