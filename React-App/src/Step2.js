import React, { useState } from 'react';

function Step2({ onFilterTypeSelect }) {
  const [filterType, setFilterType] = useState(null);

  const handleFilterTypeChange = (event) => {
    setFilterType(event.target.value);
  };

  const handleNextClick = () => {
    onFilterTypeSelect(filterType);
  };

  return (
    <div>
      <h2>Step 2: Select Filter Type</h2>
      <div>
        <label>
          <input
            type="radio"
            name="filterType"
            value="spatial"
            checked={filterType === 'spatial'}
            onChange={handleFilterTypeChange}
          />
          Spatial
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="filterType"
            value="frequency"
            checked={filterType === 'frequency'}
            onChange={handleFilterTypeChange}
          />
          Frequency
        </label>
      </div>
      <button onClick={handleNextClick} disabled={!filterType}>
        Next
      </button>
    </div>
  );
}

export default Step2;
