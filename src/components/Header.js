import styles from "@/styles/Header.module.css";
import HamburgerIcon from "./HamburgerIcon";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h1>Natural Events Tracker</h1>
        <h1>(Powered By NASA)</h1>
      </div>
      <div className={styles.menu}>
        <HamburgerIcon />
      </div>
    </header>
  );
};

export default Header;
