import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Logo from '../Assests/Images/BLACK.png'
import '../components/componentsCSS/Navbar.css'
import Anayo from './anayoProject'
import Anayos from './Anayos'
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom'

const style = {
    backgroundColor: '#ffffff',
    color:'green'
}

const styleNav = {
  
    color:'green'
}
const navbar = () => {
    return (
        <React.Fragment>
        <Navbar collapseOnSelect expand="lg" style={style} >
            <Navbar.Brand href="#home"><img alt="logo" className="Navlogo" src={Logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            
           
                    </Nav>
                   
          <Nav >
                        <Nav.Link className="Navlinks">
                           Home</Nav.Link>
                      <Nav.Link className="Navlinks" href="#deets">About Us</Nav.Link>
                      <Nav.Link className="Navlinks" href="#deets">Contact Us</Nav.Link>
                     
                      <Nav.Link className="Navlinks" href="#deets">Become a Shopper</Nav.Link>
                            <Nav.Link className="Navlinks Navlinklast" href="#deets">Start Selling</Nav.Link>
                     
          
                        </Nav>
                      
        </Navbar.Collapse>
        </Navbar> 

     
         <BrowserRouter>
                <Switch>
                    <Route  path="/Anayos" component={Anayos}/>
                </Switch>
                </BrowserRouter>
          
        
       
        </React.Fragment>
        
    )
}
export default navbar