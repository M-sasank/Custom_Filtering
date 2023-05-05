import React, { useState, useEffect } from 'react';

function Step3({ filterType, onFilterSizeSelect, onCircleRadiusChange, circleRadius, setCenter, isinverse}) {
  const [filterSize, setFilterSize] = useState(3);
  const [selectedPoint, setSelectedPoint] = useState({x:0,y:0});
  const [freqimage, setfreqimage] = useState("iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==");

  const [isPropertyTrue, setIsPropertyTrue] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsPropertyTrue(event.target.checked);
    isinverse(event.target.checked);
  };

  const handleFilterSizeChange = (event) => {
    setFilterSize(parseInt(event.target.value, 10));
  };

  const handleNextClick = () => {
    onFilterSizeSelect(filterSize, selectedPoint);
  };

  const handleCircleRadiusSliderChange = (event) => {
    onCircleRadiusChange(parseFloat(event.target.value));
  };

  const handleImageClick = (event) => {
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;
    setSelectedPoint({ x, y });
    setCenter([x,y]);
    console.log(x, y);
  };

  function saveImg(img){
    console.log(img.image);
    setfreqimage(img.image);
  }

  const filterImageInFrequencyDomain = async (input) => {
    try {
    //   const formData = new FormData();
    //   console.log(input);
    //   formData.append('image', input["image"]);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({"image":input["image"]});
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
    var response =  await fetch("http://127.0.0.1:5000/frequency1", requestOptions)
    .then(response => response.json())
    .then(result => saveImg(result))
    .catch(error => console.log('error', error));
    //   console.log(input);
    //   const response = await fetch('http://127.0.0.1:5000/frequency1', {
    //     method: 'POST',
    //     body: input,
    //   });
  
    //   if (!response.ok) {
    //     throw new Error('Error filtering image in frequency domain');
    //   }
      //console.log(response);
      //const data = await response.json();
      console.log(freqimage);
      //const filteredImage = response['image'];
      //return filteredImage;
      // Convert base64 string to image blob
      //return base64ToImage(filteredImage);
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  

  useEffect(() => {
    if (filterType === 'frequency') {
      // Fetch frequency domain image from API
      // retrieve FDF1 from local storage
      const apiInput = JSON.parse(localStorage.getItem('FDF1'));
      console.log(apiInput);
      //freqimage = filterImageInFrequencyDomain(apiInput);
      filterImageInFrequencyDomain(apiInput);
    }
  }, []);

  return (
    <div>
      <h2>Step 3: {filterType === 'spatial' ? 'Select Filter Size' : 'Select Circular Area'}</h2>
      {filterType === 'spatial' && (
      <div>
        <label>
          <input
            type="radio"
            name="filterSize"
            value="3"
            checked={filterSize === 3}
            onChange={handleFilterSizeChange}
          />
          3 x 3
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="filterSize"
            value="5"
            checked={filterSize === 5}
            onChange={handleFilterSizeChange}
          />
          5 x 5
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="filterSize"
            value="7"
            checked={filterSize === 7}
            onChange={handleFilterSizeChange}
          />
          7 x 7
        </label>
      </div>)}
      {filterType === 'frequency' && (
        <div>
          <p>Select a point on the frequency domain image:</p>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img
              id = "freqimage"
              src={`data:image/png;base64,${freqimage}`}
              alt="Frequency Domain"
              onClick={handleImageClick}
            />
            {/* {selectedPoint && (
              <div
                style={{
                  position: 'absolute',
                //   left: `${selectedPoint.x}px`,
                //   top: `${selectedPoint.y}px`,
                  left: `${selectedPoint.x - circleRadius}px`,
                  top: `${selectedPoint.y - circleRadius}px`,
                  width: `${circleRadius * 100}px`,
                  height: `${circleRadius * 100}px`,
                  borderRadius: '50%',
                  border: '2px solid red',
                }}
              ></div>
            )}
          </div>
          {selectedPoint && (
            <div>
              <label>
                Circle radius:
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={circleRadius}
                  onChange={handleCircleRadiusSliderChange}
                />
                {circleRadius.toFixed(2)}
              </label>
            </div>
          )} 
          */}
          {selectedPoint && (
            <div>
              <label>
                Circle radius:
                <input
                  type="range"
                  min="0"
                  max= "512"
                  step="0.01"
                  value={circleRadius}
                  onChange={handleCircleRadiusSliderChange}
                />
                {circleRadius.toFixed(2)}
              </label>
            </div>
          )} 
          </div>
            <h1>x={selectedPoint.x} y={selectedPoint.y}  </h1>
          </div>
      )}
      <button onClick={handleNextClick}>Next</button>
      {filterType === 'frequency' && (
        <label>
          <input
            type="checkbox"
            checked={isPropertyTrue}
            onChange={handleCheckboxChange}
          />
          Inverse
        </label>
      )}
    </div>
  ); 
}

export default Step3;


