import React from "react";
import PropTypes from "prop-types";
import MenuItem from "@material-ui/core/MenuItem";
import FilterList from "@material-ui/icons/FilterList";
import { VisibilityFilters } from "../actions";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;

const Filter = ({ filter, setFilter }) => {
  function handleChange(event) {
    setFilter(event.target.value);
  }

  return (
    <FormControl>
      <InputLabel htmlFor="filter">Filter</InputLabel>
      <Select value={filter} onChange={handleChange} IconComponent={FilterList}>
        <MenuItem value={SHOW_ALL}>All</MenuItem>
        <MenuItem value={SHOW_ACTIVE}>Active</MenuItem>
        <MenuItem value={SHOW_COMPLETED}>Completed</MenuItem>
      </Select>
    </FormControl>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default Filter;
