import React, { useState } from 'react';

function Step4({ filterSize, onGridValueChange, gridValues, nextStep }) {
  const [isIncrementMode, setIsIncrementMode] = useState(true);
  let [grid, setGrid] = useState(gridValues);

  const handleIncrementDecrementClick = () => {
    setIsIncrementMode(!isIncrementMode);
  };

  const handleGridValueButtonClick = (index, increment) => {
    const newGridValues = [...grid];
    if (increment) {
      newGridValues[index]++;
    } else {
      newGridValues[index]--;
    }
    //console.log(newGridValues);
    setGrid(newGridValues);
    //console.log(index, grid);
    // console.log(gridValues);
    // newGridValues = [...gridValues];
    // if (increment) {
    //   newGridValues[index]++;
    // } else {
    //   newGridValues[index]--;
    // }
    onGridValueChange(newGridValues);
  }

  const renderGrid = () => {
    if (!filterSize) {
      return null;
    }

    const gridItems = gridValues
    .fill(0)
    .map((_, index) => (
      <div
        key={index}
        className="filter-cell"
        onClick={() => {
          //const currentValue = gridValues[index];
          handleGridValueButtonClick(index, isIncrementMode);
        }}
        style={{
          // background: value === 1 ? '#333' : 'transparent',
          border: '1px solid #ccc',
          boxSizing: 'border-box',
          height: '50px',
          width: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#333',
          cursor: 'pointer',
        }}
      >
        {grid[index]}
      </div>
    ));

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${filterSize}, 50px)`,
          gap: '10px',
          marginTop: '20px',
        }}
      >
        {gridItems}
      </div>
    );
  };

  return (
    <div>
      <h2>Step 4: Select Filter Values</h2>
      <p>Select the values for the filter:</p>
      {renderGrid()}
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleIncrementDecrementClick}>
          {isIncrementMode ? 'Increment' : 'Decrement'}
        </button>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
}

export default Step4;





