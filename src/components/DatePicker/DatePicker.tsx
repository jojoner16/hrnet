import React from 'react';
import { Box, DateInput } from 'grommet';

interface CustomDatePickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  label,
  value,
  onChange,
}) => {
  const handleChange = (event: { value: string | string[] }) => {
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
