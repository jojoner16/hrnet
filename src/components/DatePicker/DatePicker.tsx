import React from 'react';
import { DateInput } from 'grommet';

interface CustomDatePickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  label,
  value,
  onChange,
}) => {
  // Logique d'initialisation du sélecteur de date
  return (
    <div>
      <label htmlFor="datepicker">{label}</label>
      <DateInput
        format="mm/dd/yyyy"
        value={new Date().toISOString()}
        onChange={({ value }) => {}}
      />
    </div>
  );
};

export default CustomDatePicker;
