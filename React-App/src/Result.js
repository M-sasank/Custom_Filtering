import React from 'react';

function Result({ original, getfilteredImage, onTryAgain, filterType }) {
  let images = [original];
  let comp = (<></>);
  if(filterType === 'spatial') {
    images.push(getfilteredImage.image);
    comp = (<div>
      <h2>Result: Filtered Image</h2>
      <p>The Original image is displayed below:</p>
      <img src={`data:image/png;base64,${images[0]}`} alt="Original Image" />
      <p>The filtered image is displayed below:</p>
      <img src={`data:image/png;base64,${images[1]}`} alt="Filtered Image" />
      <br />
      <button onClick={onTryAgain}>Try Again</button>
    </div>);
  }
  else{
    images.push(getfilteredImage.image);
    images.push(getfilteredImage.spectrum);
    console.log(images);
    comp = (<div>
      <h2>Result: Filtered Image</h2>
      <p>The Original image is displayed below:</p>
      <img src={`data:image/png;base64,${images[0]}`} alt="Original Image" />
      <br/>
      <p>The filtered image is displayed below:</p>
      <img src={`data:image/png;base64,${images[1]}`} alt="Filtered Image" />
      <br />
      <p>The spectrum of the filtered image is displayed below:</p>
      <img src={`data:image/png;base64,${images[2]}`} alt="Filtered Image" />
      <br />
      <button onClick={onTryAgain}>Try Again</button>
    </div>);
  }
  return (
    <div>
      {comp}
    </div>
  );
}

export default Result;
