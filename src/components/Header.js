import styles from "@/styles/Header.module.css";
import HamburgerIcon from "./HamburgerIcon";

const Header = ({ menu }) => {
  const [menuOpen, setMenuOpen] = menu;
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Natural Events Tracker</h1>
        <h1>(Powered By NASA)</h1>
      </div>
      <div className={styles.menu} onClick={toggleMenu}>
        <HamburgerIcon />
      </div>
    </header>
  );
};

export default Header;
