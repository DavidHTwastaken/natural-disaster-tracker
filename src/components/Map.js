import { useState } from "react";
import GoogleMap from "google-maps-react-markers";
import styles from "@/styles/Map.module.css";
import LocationMarker from "./LocationMarker";
import LocationBox from "./LocationInfoBox";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
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
        //apiKey="AIzaSyAISJGaGMl_IPQQocbrsY3P3vbEdSaJ3vA"
        center={center}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMap>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
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
