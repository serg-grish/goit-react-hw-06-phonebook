import React from "react";
import PropTypes from "prop-types";
import s from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../../redux/selectors";
import contactsActions from "../../redux/action";

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={s.filterLabel}>
    <h3>Find contacts by name</h3>
    <input
      className={s.filterInput}
      type="text"
      value={value}
      onChange={(e) => dispatch(contactsActions.changeFilter(e.target.value))}
    />
  </label>
  );
};


Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
