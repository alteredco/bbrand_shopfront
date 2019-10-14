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
     <Route path="/item" render={ () => <Item />}/>
     <Route path="/new" render={()=> <New />} />
     <Route exact path="/index.html" render={()=> <Home />} />
    <Route exact path="/" render={()=> <Home />} /> 
    </Switch>
  </div> 
</BrowserRouter>
  );
}

export default App;
