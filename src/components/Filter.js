import React from 'react';
import PropType from 'prop-types';
import { Form } from 'react-bootstrap';
import years from '../constants/years';
import successCasesTexts from '../constants/successCasesTexts';

const Filter = (props) => {
  const { handleChange } = props;
  const yearsExtended = ['All', ...years];
  const successCases = ['All', ...successCasesTexts];

  return (
    <div>
      <Form
        className="d-flex flex-wrap justify-content-center ml-5"
      >
        <Form.Group
          controlId="exampleForm.SelectCustom"
          className="d-flex align-items-center flex-row mx-5"
        >
          <Form.Label className="pr-3">
            Year
          </Form.Label>
          <Form.Control
            as="select"
            onChange={handleChange}
            name="year"
            custom
          >
            {yearsExtended.map((year) => (
              <option
                key={year}
                value={year}
              >
                {year}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group
          controlId="exampleForm.SelectCustom"
          className="d-flex align-items-center flex-row mx-5"
        >
          <Form.Label className="pr-3">
            Lauch success
          </Form.Label>
          <Form.Control
            as="select"
            onChange={handleChange}
            name="successCase"
            custom
          >
            {successCases.map((successCase) => (
              <option
                key={successCase}
                value={successCase}
              >
                {successCase}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
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
