import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Post from './pages/post/post';
import Edit from './pages/edit/edit';
import Feed from './pages/feed/feed';
import Lermais from './pages/lerMais/lermais';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route path="/post" component={Post} />
        <Route path="/edit//:id" component={Edit} />
        <Route path="/lermais" component={Lermais} />
      </Switch>
    </Router>
  )
}

export default App;
