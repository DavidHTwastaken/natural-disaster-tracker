import { useState, useRef } from "react";
import GoogleMap from "google-maps-react-markers";
import styles from "@/styles/Map.module.css";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ eventData, center, zoom, offline, options }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [mapReady, setMapReady] = useState(false);
  const mapRef = useRef(null);
  const onGoogleApiLoaded = ({ map }) => {
    mapRef.current = map;
    setMapReady(true);
  };
  const markers = eventData.map((ev, index) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          key={index}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
      );
    }
    return null;
  });

  return (
    <div className={styles.map}>
      <GoogleMap
        apiKey={offline ? "" : "AIzaSyAuAbMfiQHFKAqWC_UcLjJ_Hdxv0OACAVo"}
        center={center}
        defaultCenter={center}
        defaultZoom={zoom}
        options={options}
        onGoogleApiLoaded={onGoogleApiLoaded}
      >
        {markers}
      </GoogleMap>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
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
