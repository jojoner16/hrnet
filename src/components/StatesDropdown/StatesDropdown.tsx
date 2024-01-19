import React from 'react';
import states from '../../data/states.json';

interface StatesDropdownProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
}

export const StatesDropdown: React.FC<StatesDropdownProps> = ({
  onChange,
  name,
}) => {
  // Logique d'initialisation du menu déroulant des États
  return (
    <div>
      <label>State</label>
      <select title="Select a state" onChange={onChange} name={name}>
        {states.map((state) => (
          <option key={state.abbreviation} value={state.abbreviation}>
            {state.name}
          </option>
        ))}
      </select>
    </div>
  );
};
