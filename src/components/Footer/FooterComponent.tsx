import React from "react";
import './FooterComponent.scss';

export interface FooterComponentProps {};

const FooterComponent: React.FC<FooterComponentProps> = (props) => {
  return (
    <footer>
      Footer는 grid로 구성
    </footer>
  );
}

export default FooterComponent;