import React from 'react';

function Result({ filteredImage, onTryAgain }) {
  return (
    <div>
      <h2>Result: Filtered Image</h2>
      <p>The filtered image is displayed below:</p>
      <img src={`data:image/png;base64,${filteredImage}`} alt="Filtered Image" />
      <br />
      <button onClick={onTryAgain}>Try Again</button>
    </div>
  );
}

export default Result;
