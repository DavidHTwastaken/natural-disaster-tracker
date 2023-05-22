import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";
import styles from "@/styles/LocationMarker.module.css";

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className={styles.locationMarker} onClick={onClick}>
      <Icon icon={locationIcon} className={styles.locationIcon}></Icon>
    </div>
  );
};

export default LocationMarker;
