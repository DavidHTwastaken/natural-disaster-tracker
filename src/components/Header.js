import styles from "@/styles/Header.module.css";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Icon icon={locationIcon} />
        Natural Disasters Tracker (Powered By NASA)
      </h1>
    </header>
  );
};

export default Header;
