import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {BrowserRouter as Router, Link} from "react-router-dom";


function Nav() {

  return (
    <>
    <Router>
    <ReactBootStrap.Nav variant="pills"  style={{background: "crimson",textDecoration:"none",fontSize:"18px"}}>
      <ReactBootStrap.NavDropdown title="Products" id="nav-dropdown"  >

        <ReactBootStrap.NavDropdown.Item ><Link to="/Products/sentinel">CMX Sentinel</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/Products/stream">CMX Stream</Link></ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <ReactBootStrap.NavDropdown title="Trendius" id="nav-dropdown">
        <ReactBootStrap.NavDropdown.Item ><Link to="/Trendius/predective">Predective Analytics</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/Trendius/performance">Performance Analytics</Link></ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <ReactBootStrap.NavDropdown title="Engineering" id="nav-dropdown">
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
      <ReactBootStrap.NavDropdown title="Trendius" id="nav-dropdown">
        <ReactBootStrap.NavDropdown.Item ><Link to="/trendius/predective">Predective Analytics</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/trendius/performance">Performance Analytics</Link></ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <ReactBootStrap.NavDropdown title="Engineering" id="nav-dropdown">
        <ReactBootStrap.NavDropdown.Item ><Link to="/engineering/acoustics">Acoustics & Pulsation</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/engineering/vibration">Vibration and Noise</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/engineering/fmea">FMEA</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/engineering/intergrity">Intergrity & Reliability</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/engineering/surge">Surge & Fluid Dynamics</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/engineering/fitness">Fitness for Services</Link></ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <ReactBootStrap.NavDropdown title="PlantMORE" id="nav-dropdown">
        <ReactBootStrap.NavDropdown.Item ><Link to="/plant/turnaround">Turnaround</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/plant/balancing">Balancing & Alignment</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/plant/o&m">O&M</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/plant/commisioning">Commisioning and Startup</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/plant/ESP">ESP</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/plant/monitoring">Field Condition Monitoring</Link></ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <ReactBootStrap.NavDropdown title="Prespectives" id="nav-dropdown">
        <ReactBootStrap.NavDropdown.Item ><Link to="/whitepaper">Whitepaper</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/resources">Resources</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/blogs">Blogs</Link></ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <ReactBootStrap.NavDropdown title="Company" id="nav-dropdown">
        <ReactBootStrap.NavDropdown.Item ><Link to="/about">About Us</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/leadership">Leadership</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/policies">Policies</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/sustanibility">Sustanibility</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="/careers">Careers</Link></ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>      
    </ReactBootStrap.Nav>
    </Router>
    </>
  );
}

export default Nav;
