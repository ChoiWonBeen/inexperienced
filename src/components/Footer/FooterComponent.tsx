import React from "react";
import './FooterComponent.scss';

export interface FooterComponentProps {};

const FooterComponent: React.FC<FooterComponentProps> = (props) => {
  return (
    <footer>
      Footer
    </footer>
  );
}

export default FooterComponent;