import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {BrowserRouter as Router, Link} from "react-router-dom";


function Nav() {

  return (
    <>
    
    <ReactBootStrap.Nav variant="pills"  style={{background: "crimson",textDecoration:"none",fontSize:"18px"}}>
      <ReactBootStrap.NavDropdown title="Products" id="nav-dropdown"  >

        <ReactBootStrap.NavDropdown.Item ><Link to="/Products/Sentinel">CMX Sentinel</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/Products/Stream">CMX Stream</Link></ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <ReactBootStrap.NavDropdown title="Trendius" id="nav-dropdown">
        <ReactBootStrap.NavDropdown.Item ><Link to="/Trendius/Predective">Predective Analytics</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/Trendius/Performance">Performance Analytics</Link></ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <ReactBootStrap.NavDropdown title="Engineering" Link to="/Engineering" href="/Engineering" id="nav-dropdown">
        <ReactBootStrap.NavDropdown.Item ><Link to="/Engineering/Acoustics">Acoustics & Pulsation</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/Engineering/Vibration">Vibration and Noise</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/Engineering/Fmea">FMEA</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/Engineering/Intergrity">Intergrity & Reliability</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/Engineering/Surge">Surge & Fluid Dynamics</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/Engineering/Fitness">Fitness for Services</Link></ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <ReactBootStrap.NavDropdown title="PlantMORE" id="nav-dropdown">
        <ReactBootStrap.NavDropdown.Item ><Link to="/Plantmore/Turnaround">Turnaround</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/Plantmore/Balancing">Balancing & Alignment</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/Plantmore/Om">O&M</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/Plantmore/Commisioning">Commisioning and Startup</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/Plantmore/Esp">ESP</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/Plantmore/Field">Field Condition Monitoring</Link></ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
     
      
      <ReactBootStrap.NavDropdown title="Prespectives" id="nav-dropdown">
        <ReactBootStrap.NavDropdown.Item ><Link to="/Whitepaper">Whitepaper</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/Resources">Resources</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/Blogs">Blogs</Link></ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <ReactBootStrap.NavDropdown title="Company" id="nav-dropdown">
        <ReactBootStrap.NavDropdown.Item ><Link to="/About">About Us</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/Leadership">Leadership</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/Policies">Policies</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/Sustanibility">Sustanibility</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/Careers">Careers</Link></ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>      
    </ReactBootStrap.Nav>
  
    </>
  );
}

export default Nav;
