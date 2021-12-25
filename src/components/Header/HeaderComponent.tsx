import React from 'react';
import "./HeaderComponent.scss"
import { ReactComponent as SettingIcon } from "../../assets/setting.svg";

interface HeaderComponentProps {
  
}
 
const HeaderComponent: React.FunctionComponent<HeaderComponentProps> = () => {
  return ( 
    <div className="header">
      <SettingIcon className='icon'/>
    </div>
   );
}
 
export default HeaderComponent;