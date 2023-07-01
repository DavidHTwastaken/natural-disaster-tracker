import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return <div onClick={toggleMenu}></div>;
};

export default Menu;
