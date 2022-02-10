import React, { Fragment } from "react";
import './asset/css/Bootstrap.min.css';
import './asset/css/custom.css';

import {Container,Row , Col ,Button} from 'react-bootstrap'
import TobBanner from "./componets/TobBanner";
import Services from "./componets/Services/Services";
import TopNavigation from "./componets/TopNavbar/TopNavigation";
function App() {
  return (
<div>
  <TobBanner/>
  <Services/>

</div>




    );
}

export default App;
