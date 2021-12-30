import React from 'react';
import "./HeaderComponent.scss"
import { ReactComponent as SettingIcon } from "../../assets/svg/setting.svg";

interface HeaderComponentProps { }
 
const HeaderComponent: React.FunctionComponent<HeaderComponentProps> = () => {
  return ( 
    <header>
      <div className="logo__text">INEXPERIENCED</div>
      <div className='header__links'>
        something
      </div> 
      <SettingIcon className='icon'/>
    </header>
   );
}
 
export default HeaderComponent;