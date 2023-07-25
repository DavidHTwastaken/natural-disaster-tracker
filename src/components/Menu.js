import styles from "@/styles/Menu.module.css";
import Checkbox from "@mui/material/Checkbox";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <Checkbox></Checkbox>
      <Checkbox></Checkbox>
      <Checkbox></Checkbox>
      <Checkbox></Checkbox>
      <Checkbox></Checkbox>
    </div>
  );
};

export default Menu;
