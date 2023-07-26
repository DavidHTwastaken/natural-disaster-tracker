import styles from "@/styles/Menu.module.css";
import { FormGroup, Checkbox, FormControlLabel } from "@mui/material/";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Earthquakes"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Floods"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Severe Storms"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Volcanoes"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Wildfires"
        />
      </FormGroup>
    </div>
  );
};

export default Menu;
