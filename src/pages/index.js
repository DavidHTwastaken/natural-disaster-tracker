import Head from "next/head";
import Map from "@/components/Map";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Menu from "@/components/Menu";

export default function Home() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offline, setOffline] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [eventOptions, setEventOptions] = useState({
    earthquakes: true,
    floods: true,
    severeStorms: true,
    volcanoes: true,
    wildfires: true,
  });
  useEffect(() => {
    // Add error handler for API key
    window.gm_authFailure = function () {
      window.sessionStorage.setItem("offline", "true");
      window.location.reload();
    };

    // Check if offline
    if (window.sessionStorage.getItem("offline")) {
      setOffline(true);
    }

    // Get the event data
    const fetchEvents = async () => {
      setLoading(true);
      let res;
      try {
        res = await fetch(
          // TODO: Change back to allow volcanoes once the API is fixed
          "https://eonet.gsfc.nasa.gov/api/v3/events?status=open&category=earthquakes,floods,severeStorms,wildfires"
        );
      } catch (error) {
        return console.error(error);
      }

      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <>
      <Head>
        <title>Natural Disaster Tracker</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header menu={[menuOpen, setMenuOpen]} />
      <main style={{ position: "relative", overflow: "hidden" }}>
        {menuOpen && <Menu update={setEventData} />}
        {!loading ? (
          <Map
            eventData={eventData}
            offline={offline}
            eventOptions={eventOptions}
          />
        ) : (
          <Loader />
        )}
      </main>
    </>
  );
}
