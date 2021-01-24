import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { changeDensity } from "../../../redux";
import { useDispatch } from 'react-redux';

export default function DensityToggler() {
    const dispatch = useDispatch();
    const [state, setState] = React.useState({
    checked: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    dispatch(changeDensity());
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Switch checked={state.checked} onChange={handleChange} name="checked" />}
        label="Densed View"
      />
    </FormGroup>
  );
}