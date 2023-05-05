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
    <div className = 'container'>
      <style><style>{'\n' +
            '@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");\n' +
            '@import url(\'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap\');\n' +
            '\n' +
            '* {\n' +
            '  margin: auto;\n' +
          'align : center;' +
            '  padding: 0;\n' +
            '  box-sizing: border-box;\n' +
            '  font-family: "Poppins", sans-serif;\n' +
            '}\n' +
            '\n' +
            '.container {\n' +
            '  height: 100%;\n' +
            '  width: 100%;\n' +
            '  align-items: center;\n' +
            '  display: flex;\n' +
            '  justify-content: center;\n' +
            '  background-color: #fcfcfc;\n' +
            '}\n' +
            '\n' +
            '.card {\n' +
            '  border-radius: 10px;\n' +
            '  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);\n' +
            '  width: auto;\n' +
            '  height: auto;\n' +
            '  background-color: #ffffff;\n' +
            '  padding: 10px 30px 40px;\n' +
            '}\n' +
            '\n' +
            '.card h3 {\n' +
            '  font-size: 22px;\n' +
            '  font-weight: 600;\n' +
            '\n' +
            '}\n' +
            '\n' +
            '.drop_box {\n' +
            '  margin: 10px 0;\n' +
            '  padding: 30px;\n' +
            '  display: flex;\n' +
            '  align-items: center;\n' +
            '  justify-content: center;\n' +
            '  flex-direction: column;\n' +
            '  border: 3px dotted #a3a3a3;\n' +
            '  border-radius: 5px;\n' +
            '}\n' +
            '\n' +
            '.drop_box h4 {\n' +
            '  font-size: 16px;\n' +
            '  font-weight: 400;\n' +
            '  color: #2e2e2e;\n' +
            '}\n' +
            '\n' +
            '.drop_box p {\n' +
            '  margin-top: 10px;\n' +
            '  margin-bottom: 20px;\n' +
            '  font-size: 12px;\n' +
            '  color: #a3a3a3;\n' +
            '}\n' +
            '\n' +
            '.btn {\n' +
            '  text-decoration: none;\n' +
            '  background-color: #005af0;\n' +
            '  color: #ffffff;\n' +
            '  align-items: center;\n' +
            '  padding: 10px 20px;\n' +
            '  border: none;\n' +
            '  outline: none;\n' +
            '  transition: 0.3s;\n' +
            '}\n' +
            '\n' +
            '.btn:hover{\n' +
            '  text-decoration: none;\n' +
            '  background-color: #ffffff;\n' +
            '  color: #005af0;\n' +
            '  padding: 10px 20px;\n' +
            '  border: none;\n' +
            '  outline: 1px solid #010101;\n' +
            '}\n' +
            '.form input {\n' +
            '  margin: 10px 0;\n' +
            '  width: 100%;\n' +
            '  background-color: #e2e2e2;\n' +
            '  border: none;\n' +
            '  outline: none;\n' +
            '  padding: 12px 20px;\n' +
            '  border-radius: 4px;\n' +
            '}\n'}</style>
        <style>{
            '.img1 {'+
  'width : auto;'+
    'height : auto;' +
            'align-items : center'+
  // 'margin : 10px;'+
  // 'padding : 10px;'+
'}'
        } </style></style>
        <div className="card">
          <div className="drop_box">
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
               className = "img1"
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

      <button className="btn" onClick={handleNextClick}>Next</button>
            <br/>
      <label>
        <input
          type="checkbox"

          checked={isPropertyTrue}
          onChange={handleCheckboxChange}
        />
        Inverse
      </label>
        </div>
    </div>
      </div>
  ); 
}

export default Step3;


