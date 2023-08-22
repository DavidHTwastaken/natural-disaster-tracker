import Head from "next/head";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);
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
        <meta
          name="google-site-verification"
          content="HYW8thcYho7lcTuZvN2rajO--lrT0mVccmhri_0-agE"
        />
        <meta
          name="description"
          content="An interactive map showing natural events around the world."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header menu={[menuOpen, setMenuOpen]} />
      {loading ? (
        <Loader />
      ) : (
        <Main
          eventOptionsState={[eventOptions, setEventOptions]}
          menuOpen={menuOpen}
          offline={offline}
          eventData={eventData}
        />
      )}
    </>
  );
}
