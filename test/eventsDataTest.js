async function getMultiCategories() {
  const obj = await fetch(
    "https://eonet.gsfc.nasa.gov/api/v3/events?status=open&category=earthquakes,floods,severeStorms,wildfires"
  );
  let json;
  try {
    json = await obj.json();
  } catch (error) {
    return console.log(error);
  }
  const events = json.events;
  console.log(
    events.filter((ev) => {
      return ev.categories.length > 1;
    })
  );
}
getMultiCategories();
