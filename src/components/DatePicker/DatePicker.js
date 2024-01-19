import React from 'react';
import { Box, DateInput } from 'grommet';

const CustomDatePicker = ({ label, value, onChange }) => {
  const handleChange = (event) => {
    const nextValue = Array.isArray(event.value) ? event.value[0] : event.value;
    onChange(nextValue);
  };

  return (
    <Box>
      <label htmlFor="datepicker">{label}</label>
      <DateInput
        aria-label="datepicker"
        name="datepicker"
        id="datepicker"
        format="dd/mm/yyyy"
        value={value}
        onChange={handleChange}
      />
    </Box>
  );
};

export default CustomDatePicker;
