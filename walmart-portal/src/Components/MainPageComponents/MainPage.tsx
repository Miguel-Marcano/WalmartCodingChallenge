import React from 'react';
import {Topbar} from './NavBar/TopBar'
import ComplexGrid from './Content/Content'
import './MainPage.css'

/**
 * 
 * Display the navegation bar and the card on the same view
 */
const MainMenu = () => {
    return (
      <body style={{backgroundColor: "lightskyblue"}}>
          <Topbar/>
          <div className = "mainBody">
            <ComplexGrid/>
          </div>
      </body>
    );
  };
  
  export default MainMenu;