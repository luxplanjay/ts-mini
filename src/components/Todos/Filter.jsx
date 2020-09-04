import React from 'react';
import './Filter.css';

const Filter = ({ value, onChange }) => (
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
