import styles from "@/styles/Menu.module.css";
import { FormGroup, Checkbox, FormControlLabel } from "@mui/material/";

const Menu = ({ updater, isOpen }) => {
  const [eventOptions, setEventOptions] = updater;

  const updateEventOptions = (ev) => {
    const newOptions = { ...eventOptions };
    newOptions[ev.target.id] = !newOptions[ev.target.id];
    setEventOptions(newOptions);
  };

  return (
    <div className={`${styles.menu} ${!isOpen ? styles.invisible : ""}`}>
      <FormGroup>
        <FormControlLabel
          id="earthquakes"
          control={<Checkbox defaultChecked />}
          label="Earthquakes"
          onChange={updateEventOptions}
        />
        <FormControlLabel
          id="floods"
          control={<Checkbox defaultChecked />}
          label="Floods"
          onChange={updateEventOptions}
        />
        <FormControlLabel
          id="severeStorms"
          control={<Checkbox defaultChecked />}
          label="Severe Storms"
          onChange={updateEventOptions}
        />
        <FormControlLabel
          id="volcanoes"
          control={<Checkbox defaultChecked />}
          label="Volcanoes"
          onChange={updateEventOptions}
        />
        <FormControlLabel
          id="wildfires"
          control={<Checkbox defaultChecked />}
          label="Wildfires"
          onChange={updateEventOptions}
        />
      </FormGroup>
    </div>
  );
};

export default Menu;
