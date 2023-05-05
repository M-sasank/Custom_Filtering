import React from 'react';

function Step5({ onSubmit }) {
  return (
    <div>
      <h2>Step 5: Submit Form</h2>
      <p>Click the button below to submit the form and display the filtered image:</p>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default Step5;
