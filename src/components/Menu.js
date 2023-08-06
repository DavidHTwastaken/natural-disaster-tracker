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
          control={<Checkbox defaultChecked id="earthquakes" />}
          label="Earthquakes"
          onChange={updateEventOptions}
        />
        <FormControlLabel
          control={<Checkbox defaultChecked id="floods" />}
          label="Floods"
          onChange={updateEventOptions}
        />
        <FormControlLabel
          control={<Checkbox defaultChecked id="severeStorms" />}
          label="Severe Storms"
          onChange={updateEventOptions}
        />
        <FormControlLabel
          control={<Checkbox defaultChecked id="volcanoes" />}
          label="Volcanoes"
          onChange={updateEventOptions}
        />
        <FormControlLabel
          control={<Checkbox defaultChecked id="wildfires" />}
          label="Wildfires"
          onChange={updateEventOptions}
        />
      </FormGroup>
    </div>
  );
};

export default Menu;
