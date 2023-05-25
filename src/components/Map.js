import GoogleMapReact from "google-map-react";
import styles from "@/styles/Map.module.css";
import LocationMarker from "./LocationMarker";

const Map = ({ eventData, center, zoom }) => {
  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
        />
      );
    }
    return null;
  });

  return (
    <div className={styles.map}>
      <GoogleMapReact
        //bootstrapURLKeys={{ key: "AIzaSyAISJGaGMl_IPQQocbrsY3P3vbEdSaJ3vA" }}
        center={center}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
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
