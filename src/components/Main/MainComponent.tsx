import React from 'react';
import './MainComponent.scss';

import MainMenuComponent from "./MainMenu/MainMenuComponent";
import TodoListComponent from "./TodoList/TodoListComponent";

interface MainComponentProps { }
 
const MainComponent: React.FC<MainComponentProps> = () => {
  
  return ( 
    <section className='main'>
      <TodoListComponent />
      <MainMenuComponent />
    </section>
   );
}
 
export default MainComponent;