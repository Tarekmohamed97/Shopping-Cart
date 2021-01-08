import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import data from "./data.json";
import Header from './components/layoutComponents/header';
import Footer from './components/layoutComponents/footer'
import ListOfProducts from './components/listOfProducts';
import ConfirmationPage from './components/confirmationPage'
import store from './redux/store';
import {Provider} from 'react-redux';



function App() {

  return (
    <BrowserRouter>
    <Provider store = {store}>
      <div className="App">
        <Header />
        <Switch>
          <Route path = "/" exact component = {ListOfProducts} />
          <Route path = "/confirmationPage" exact component = {ConfirmationPage} />
        </Switch>
        <Footer />
      </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
