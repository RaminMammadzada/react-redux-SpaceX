import React from 'react';
import PropType from 'prop-types';
import years from '../constants/years';
import successCasesTexts from '../constants/successCasesTexts';

const Filter = (props) => {
  const { handleChange } = props;
  const yearsExtended = ['All', ...years];
  const successCases = ['All', ...successCasesTexts];

  return (
    <div>
      <label htmlFor="years">
        Launch year:
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
      <label htmlFor="successCases">
        Launch success:
        <select
          onChange={handleChange}
          name="successCase"
        >
          {successCases.map((successCase) => (
            <option
              key={successCase}
              value={successCase}
            >
              {successCase}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

Filter.propTypes = {
  handleChange: PropType.func,
};

Filter.defaultProps = {
  handleChange: null,
};

export default Filter;
