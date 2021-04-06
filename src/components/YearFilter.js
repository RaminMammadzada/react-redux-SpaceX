import React from 'react';
import PropType from 'prop-types';
import years from '../constants/years';

const YearFilter = (props) => {
  const { handleChange } = props;
  const yearsExtended = ['All', ...years];

  return (
    <label htmlFor="years">
      <select
        onChange={handleChange}
        name="year"
      >
        {yearsExtended.map((year) => (
          <option
            key={year}
            value={year}
          >
            {year}
          </option>
        ))}
      </select>
    </label>
  );
};

YearFilter.propTypes = {
  handleChange: PropType.func,
};

YearFilter.defaultProps = {
  handleChange: null,
};

export default YearFilter;
