import React from 'react';
import "./HeaderComponent.scss"
import { ReactComponent as SettingIcon } from "../../assets/setting.svg";

interface HeaderComponentProps {
  
}
 
const HeaderComponent: React.FunctionComponent<HeaderComponentProps> = () => {
  return ( 
    <header>
      <SettingIcon className='icon'/>
    </header>
   );
}
 
export default HeaderComponent;