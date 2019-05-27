import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import New from './pages/New';
import Item from './pages/Item';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
  <div>
    <Switch>
     {/*  /* IMPORTANT! add any other routes ABOVE the home1 Route !*/ }
     <Route path="/item" component={Item} />
     <Route path="/new" component={New} />
     <Route path="/index.html" component={App} />
    <Route path="/" component={App} /> 
    </Switch>
  </div> 
</BrowserRouter>,  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
