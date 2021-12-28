import React from 'react';
import "./HeaderComponent.scss"
import { ReactComponent as SettingIcon } from "../../assets/svg/setting.svg";

interface HeaderComponentProps { }
 
const HeaderComponent: React.FunctionComponent<HeaderComponentProps> = () => {
  return ( 
    <header>
      <h1>제목 부분입니다.</h1>
      <SettingIcon className='icon'/>
    </header>
   );
}
 
export default HeaderComponent;