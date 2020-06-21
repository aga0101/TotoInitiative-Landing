import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Diagram from './components/Diagram.js';
import Form from './components/Form.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <Navbar />
      <header className="masthead bg-primary text-black text-center ti-header">
        <div className="jumbotron jumbotron-fluid ti-header">
          <h1 className="display-4">YOU ALREADY DO ENOUGH.</h1>
          <h2 className="lead">Let us help you help them.</h2>
          <img className="img-fluid" width="1100" height="400" src="img/about/petslookingoveranedge.jpeg" alt=""/>
        </div>
      </header>
      <Diagram />
      <Form />
      <Footer />
    </div>
  );
}

export default App;


