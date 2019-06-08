import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'


class App extends Component {

  render () {
    return (
      <div>
        <Header />
        <Navbar />

        <Footer />
      </div>
    )
  }
}
export default App;
