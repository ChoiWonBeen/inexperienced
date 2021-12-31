import React from 'react';
import './MainComponent.scss';

import MainMenuComponent from "./MainMenu/MainMenuComponent";

interface MainComponentProps { }
 
const MainComponent: React.FC<MainComponentProps> = () => {
  
  return ( 
    <section className='main'>
      <MainMenuComponent />
    </section>
   );
}
 
export default MainComponent;