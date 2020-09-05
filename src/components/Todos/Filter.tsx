import React from 'react';
import './Filter.css';

interface Props {
  value: string;
  onChange: (filter: string) => void;
}

const Filter = ({ value, onChange }: Props) => (
  <div className="Filter">
    <p className="Filter__label">Фильтр по содержимому</p>
    <input
      className="Filter__input"
      type="text"
      value={value}
      onChange={evt => onChange(evt.target.value)}
    />
  </div>
);

export default Filter;
