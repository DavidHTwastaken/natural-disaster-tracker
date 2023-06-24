import Head from "next/head";
import Map from "@/components/Map";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";
import Header from "@/components/Header";

export default function Home() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offline, setOffline] = useState(false);
  // Add error listener for authentication
  useEffect(() => {
    window.gm_authFailure = function () {
      console.log("The listener was activated");
      setOffline(true);
    };
  });

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
      const { events } = await res.json();
      console.log(events);

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
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </>
  );
}
