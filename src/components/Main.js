import Menu from "@/components/Menu";
import Map from "@/components/Map";

const Main = ({ eventOptionsState, menuOpen, offline, eventData }) => {
  const [eventOptions, setEventOptions] = eventOptionsState;
  return (
    <main style={{ position: "relative", overflow: "hidden" }}>
      <Menu updater={[eventOptions, setEventOptions]} isOpen={menuOpen} />
      <Map
        eventData={eventData}
        offline={offline}
        eventOptions={eventOptions}
      />
    </main>
  );
};

export default Main;
