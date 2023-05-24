import GoogleMapReact from "google-map-react";
import styles from "@/styles/Map.module.css";
import LocationMarker from "./LocationMarker";

const Map = ({ eventData, center, zoom }) => {
  return (
    <div className={styles.map}>
      <GoogleMapReact
        //bootstrapURLKeys={{ key: "AIzaSyAISJGaGMl_IPQQocbrsY3P3vbEdSaJ3vA" }}
        center={center}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <LocationMarker
          lat={45.04774045555712}
          lng={-79.11658260294733}
        ></LocationMarker>
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
