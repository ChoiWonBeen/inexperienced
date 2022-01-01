import React from "react";
import { motion } from "framer-motion"
import "./MainMenuComponent.scss";

export interface MainMenuProps {};

const MainMenu: React.FC<MainMenuProps> = (props) => {


  return (
    <div className="main-menu">
      {[...Array(8)].map((n, idx) => {
        return (
          <motion.div
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="main-menu__option"
            key={idx}>
            {idx + 1}
          </motion.div>
        )
      })}
    </div>
  );
}

export default MainMenu;