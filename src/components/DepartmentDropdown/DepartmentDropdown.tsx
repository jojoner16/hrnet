import React from 'react';
import departments from '../../data/departments.json';

interface DepartmentsDropdownProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
}

export const DepartmentsDropdown: React.FC<DepartmentsDropdownProps> = ({
  onChange,
  name,
}) => {
  return (
    <div>
      <label htmlFor={name}>Department</label>
      <select title="Select a department" onChange={onChange} name={name}>
        {departments.map((department) => (
          <option key={department.name} value={department.name}>
            {department.name}
          </option>
        ))}
      </select>
    </div>
  );
};
