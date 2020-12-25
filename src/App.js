import React, {useState} from 'react';
import data from "./data.json";
import Header from './components/layoutComponents/header';
import Footer from './components/layoutComponents/footer'
import ListOfProducts from './components/listOfProducts';

function App() {

  return (
    <div className="App">
        <Header />
        <ListOfProducts />
        <Footer />
    </div>
  );
}

export default App;
