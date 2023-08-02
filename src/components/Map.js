import { useState } from "react";
import GoogleMap from "google-maps-react-markers";
import styles from "@/styles/Map.module.css";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ eventData, center, zoom, options, offline }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  /**TODO:
   * Implement a filter that determines which markers are shown
   * */
  const markers = eventData
    .filter((ev) => {
      return options[ev.categories.id];
    })
    .map((ev, index) => {
      return (
        <LocationMarker
          key={index}
          lat={ev.geometry[0].coordinates[1]}
          lng={ev.geometry[0].coordinates[0]}
          type={ev.categories[0].title}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
      );
    });

  return (
    <div className={styles.map}>
      <GoogleMap
        apiKey={offline ? "" : "AIzaSyAuAbMfiQHFKAqWC_UcLjJ_Hdxv0OACAVo"}
        center={center}
        defaultCenter={center}
        defaultZoom={zoom}
        options={options}
      >
        {markers}
      </GoogleMap>
      {/* {locationInfo && <LocationInfoBox info={locationInfo} />} */}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 10,
    lng: -10,
  },
  zoom: 3,
  offline: true,
  options: {
    disableDefaultUI: true,
    gestureHandling: "greedy",
    minZoom: 2,
    restriction: {
      latLngBounds: { north: 85, south: -80, west: -180, east: 180 },
    },
  },
};

export default Map;
