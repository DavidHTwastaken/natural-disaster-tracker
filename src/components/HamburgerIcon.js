import styles from "@/styles/HamburgerIcon.module.css";

const HamburgerIcon = () => {
  return (
    <div className={styles.hamburger}>
      <div className={styles.burger}></div>
      <div className={styles.burger}></div>
      <div className={styles.burger}></div>
    </div>
  );
};

export default HamburgerIcon;
