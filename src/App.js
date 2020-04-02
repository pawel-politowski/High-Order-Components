import React from 'react';
import './App.css';
import Counter from './Components/Counter'
import FullCounter from './Components/FullCounter';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Users from './Components/Users'
import UsersAnother from './Components/UsersAnother';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Counter} />
        <Route exact path="/fullcounter" component={FullCounter} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/usersanother" component={UsersAnother} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
