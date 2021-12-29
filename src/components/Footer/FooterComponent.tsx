import React from "react";
import './FooterComponent.scss';

export interface FooterComponentProps {};

const FooterComponent: React.FC<FooterComponentProps> = (props) => {
  return (
    <div>
      <footer>
        Footer는 grid로 구성
      </footer>
      <div className="copyright">copyright in ...</div>
    </div>
  );
}

export default FooterComponent;