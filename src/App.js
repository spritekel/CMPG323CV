import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './App.css';

import Footer from  './components/Footer';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

class App extends React.Component {
  constructor(props){
    super (props);
    this.state = {
      title: 'Kelvin Popovic',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'The quieter you become, the more you are able to hear…',
        subTitle: 'check out my profile'  
      },
      about: {
        title: 'Profile' 
        
      },
      contact: {
        title: 'let\'s talk'
      }
    }
  }
  
  render()
  {
    return (
    <Router>
      <Container className="p-0" fluid={true}>
        <NavBar className="border-bottom" bg="transparent" expand="lg">
          <NavBar.Brand>Kelvin Popovic</NavBar.Brand>
          
          <NavBar.Toggle className="border-0" aria-controls="navbar-toggle"/>
          <NavBar.Collapse id="aria-toggle">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          
            
          </Nav>
        </NavBar.Collapse>
        </NavBar>


        <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle}/>}/>
        <Route path="/about" exact render={() => <AboutPage title={this.state.about.title}/>}/>
        <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title}/>}/>
        
        <Footer /> 
      
      </Container>
    </Router>
    );
  }
}
export default App;
