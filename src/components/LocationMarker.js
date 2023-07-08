import { Icon } from "@iconify/react";
import fire from "@iconify/icons-mdi/fire-alert";
import styles from "@/styles/LocationMarker.module.css";

/**
 * Types to include:
 * - wildfires
 * - floods
 * - earthquakes
 * - severe storms
 * - volcanoes
 */
const eventTypes = {
  Wildfires: fire,
};

const LocationMarker = ({ lat, lng, onClick, type }) => {
  console.log(type);
  if (eventTypes.hasOwnProperty(type)) {
    console.log("Has the property: " + type);
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
