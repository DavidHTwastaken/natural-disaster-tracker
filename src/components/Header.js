import styles from "@/styles/Header.module.css";
import HamburgerIcon from "./HamburgerIcon";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Natural Events Tracker</h1>
      <h1> (Powered By NASA)</h1>
      <HamburgerIcon />
    </header>
  );
};

export default Header;
