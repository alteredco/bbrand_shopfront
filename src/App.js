import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Item from './pages/Item';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <BrowserRouter>
  <div>
    <NavBar />
    <Switch>
     {/*  /* IMPORTANT! add any other routes ABOVE the home1 Route !*/ }
     <Route path="/item" component={Item} />
     <Route path="/new" component={New} />
     <Route path="/index.html" component={Home} />
    <Route path="/" component={Home} /> 
    </Switch>
  </div> 
</BrowserRouter>
  );
}

export default App;
