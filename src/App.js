import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Nav from './Component/Nav';
import Acoustics from './Component/Engineering/Acoustics';
import Fitness from './Component/Engineering/Fitness';
import Fmea from './Component/Engineering/Fmea';
import Intergrity from './Component/Engineering/Intergrity';
import Surge from './Component/Engineering/Surge';
import Vibration from './Component/Engineering/Vibration';
import Turnaround from './Component/Plantmore/Turnaround';
import Balancing from './Component/Plantmore/Balancing';
import Commisioning from './Component/Plantmore/Commisioning';
import Esp from './Component/Plantmore/Esp';
import Om from './Component/Plantmore/Om';
import Field from './Component/Plantmore/Field';

import Engineering from './Component/Engineering';






function App(){
  return(
    <Router>
      <div>
      <Nav />
      <Switch>
        <Route exact path="/Products/Sentinel">
          <div>Hi</div>
        </Route>
        <Route exact path="/Products/Stream">
          <div>Hi2</div>
        </Route>
        <Route exact path="/Trendius/Predective">
          <div>Hi3</div>
        </Route>
        <Route exact path="/Trendius/Performance">
          <div>Hi4</div>
        </Route>
        <Route exact path="/Engineering">
          <Engineering />
        </Route>
        <Route exact path="/Engineering/Acoustics">
          <Acoustics />
        </Route>
        <Route exact path="/Engineering/Vibration">
          <Vibration />
        </Route>
        <Route exact path="/Engineering/Fmea">
          <Fmea />
        </Route>
        <Route exact path="/Engineering/Intergrity">
          <Intergrity />
        </Route>
        <Route exact path="/Engineering/Surge">
          <Surge />
        </Route>
        <Route exact path="/Engineering/Fitness">
          <Fitness />
        </Route>
        <Route exact path="/Plantmore/Turnaround">
          <Turnaround />
        </Route>
        <Route exact path="/Plantmore/Balancing">
          <Balancing />
        </Route>
        <Route exact path="/Plantmore/Om">
          <Om />
        </Route>
        <Route exact path="/Plantmore/Commisioning">
          <Commisioning />
        </Route>
        <Route exact path="/Plantmore/Esp">
          <Esp />
        </Route>
        <Route exact path="/Plantmore/Field">
          <Field />
        </Route>
        <Route exact path="/Whitepaper">
          <div>Hi17</div>
        </Route>
        <Route exact path="/Resources">
          <div>Hi18</div>
        </Route>
        <Route exact path="/Blogs">
          <div>Hi19</div>
        </Route>
        <Route exact path="/About">
          <div>Hi20</div>
        </Route>
        <Route exact path="/Leadership">
          <div>Hi21</div>
        </Route>
        <Route exact path="/Policies">
          <div>Hi22</div>
        </Route>
        <Route exact path="/Sustanibility">
          <div>Hi23</div>
        </Route>
        <Route exact path="/Careers">
          <div>Hi24</div>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
