import React, {useState, useEffect} from 'react';

const FilterButtons = (props) => {

  return (
    <div>
      <button
        onClick={props.filterButton}
        value="everything"
      >All</button>
      <button
        onClick={props.filterButton}
        value="null"
      >Nothing Selected Only</button>
      <button
        onClick={props.filterButton}
        value="true"
      >Bubbling Only</button>
      <button
        onClick={props.filterButton}
        value="false"
      >Not Bubbling Only</button>
    </div>
  )
};
export default FilterButtons;