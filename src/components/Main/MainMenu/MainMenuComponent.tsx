import React from "react";
import "./MainMenuComponent.scss";

export interface MainMenuProps {};

const MainMenu: React.FC<MainMenuProps> = (props) => {
  return (
    <div className="main-menu">
      {[...Array(8)].map((n, idx) => {
        return <div className="main-menu__option">{`선택${idx + 1}`}</div>
      })}
    </div>
  );
}

export default MainMenu;