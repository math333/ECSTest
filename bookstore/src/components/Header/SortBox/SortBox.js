import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { useDispatch, useSelector } from 'react-redux';
import Select from '@material-ui/core/Select';
import { sortByColumn } from '../../../redux';

export default function SortBox() {
  const dispatch = useDispatch();
  const sortingType = useSelector((state)=>state.sortingType.sortType);

  const handleChange = (event) => {
    dispatch(sortByColumn(event.target.value));
  };

  return (
    <FormControl>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Sort By
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={sortingType}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value='1_A'>Title Ascending</MenuItem>
          <MenuItem value='1_D'>Title Descending</MenuItem>
          <MenuItem value='2_A'>Author Ascending</MenuItem>
          <MenuItem value='2_D'>Author Descending</MenuItem>
          <MenuItem value='3_A'>Rating Ascending</MenuItem>
          <MenuItem value='3_D'>
            <em>Rating Descending</em>
          </MenuItem>
          <MenuItem value='4_A'>Language Ascending</MenuItem>
          <MenuItem value='4_D'>Language Descending</MenuItem>
          <MenuItem value='5_A'>Price Ascending</MenuItem>
          <MenuItem value='5_D'>Price Descending</MenuItem>
        </Select>
      </FormControl>
  );
}