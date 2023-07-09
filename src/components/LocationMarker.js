import { Icon } from "@iconify/react";
import fire from "@iconify/icons-mdi/fire-alert";
import flood from "@iconify/icons-mdi/house-flood";
import storm from "@iconify/icons-mdi/storm-advisory";
import volcano from "@iconify/icons-mdi/volcano";
import earthquake from "@iconify/icons-wi/earthquake";

import styles from "@/styles/LocationMarker.module.css";

/**
 * Types included:
 * - wildfires
 * - floods
 * - earthquakes
 * - severe storms
 * - volcanoes
 */
const eventTypes = {
  Wildfires: fire,
  "Severe Storms": storm,
  Earthquakes: earthquake,
  Volcanoes: volcano,
  Floods: flood,
};

const LocationMarker = ({ lat, lng, onClick, type }) => {
  if (eventTypes.hasOwnProperty(type)) {
    return (
      <div className={styles.locationMarker} onClick={onClick}>
        <Icon icon={eventTypes[type]} className={styles.locationIcon}></Icon>
      </div>
    );
  } else {
    return null;
  }
};

export default LocationMarker;
