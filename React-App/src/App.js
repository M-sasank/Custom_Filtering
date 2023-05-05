import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Result from './Result';

function App() {
  const [step, setStep] = useState(1);
  const [image, setImage] = useState(null);
  const [filterType, setFilterType] = useState(null);
  const [filterSize, setFilterSize] = useState(null);
  const [circleRadius, setCircleRadius] = useState(50);
  const [gridValues, setGridValues] = useState(Array(9).fill(0));
  const [filteredImage, setFilteredImage] = useState(null);
//   const [imgfeatures, setImgfeatures] = useState({w:0, h:0});
  const [center, setCenter] = useState([0,0]);
  const [isInverse, setIsInverse] = useState(false);

//   const [FDF1, setFDF1] = useState({"image" : ""});


  const handleImageUpload = (file) => {
    setImage(file);
    if (file != null){
        // store the image in the data object
        const data = {image: imageToBase64(file)};
        console.log(data);
        // store it to local storage
        localStorage.setItem('FDF1', JSON.stringify(data));
        //console.log("w: " + imgfeatures.w + " h: " + imgfeatures.h);    
    }
    setStep(2);
  }

  const handleFilterTypeSelect = (type) => {
    setFilterType(type);
    setStep(3);
  }

  const handleFilterSizeSelect = (size) => {
    setFilterSize(size);
    const arr = Array(size * size).fill(0);
    setGridValues(arr);
    if(filterType === "spatial") setStep(4);
    else setStep(5);
  }

  function imageToBase64(file) {
    const base64string = file.split(',')[1];
    return base64string;
  }

  function base64ToImage(base64String) {
    const byteString = atob(base64String);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], { type: 'image/jpeg' });
    const url = URL.createObjectURL(blob);
    return url;
  }

  function getFilteredImage() {
    // Send the form data to the API and retrieve the filtered image
    // Set the filtered image to the state variable
    if(filterType === 'spatial'){
        // reshape the gridValues array into a 2D array
        const grid = [];
        for (let i = 0; i < filterSize; i++) {
            grid.push(gridValues.slice(i * filterSize, (i + 1) * filterSize));
            }
        // store the image in the data object
        const data = {image: imageToBase64(image), kernel: grid};
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify(data);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        var response = fetch("http://127.0.0.1:5000/spatial", requestOptions)
        .then(response => response.json())
        .then(result => setFilteredImage(result.image))
        .catch(error => console.log('error', error));
    }
    else{
        const data = {image: imageToBase64(image), radius: circleRadius, center: center, inverse: isInverse};
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify(data);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        var response = fetch("http://127.0.0.1:5000/frequency2", requestOptions)
        .then(response => response.json())
        .then(result => setFilteredImage(result.image))
        .catch(error => console.log('error', error));

    }
  }

  
  const handleCircleRadiusChange = (value) => {
    setCircleRadius(value);
  }

  const handleGridValueChange = (index, value) => {
    const newValues = [...gridValues];
    newValues[index] = value;
    setGridValues(newValues);
  }

    const goToStep5 = () => {
        setStep(5);
    }

  const handleFormSubmit = () => {
    // Send the form data to the API and retrieve the filtered image
    // Set the filtered image to the state variable
    getFilteredImage();
    setStep(6);
  }

  const handleTryAgain = () => {
    setStep(1);
    setImage(null);
    setFilterType(null);
    setFilterSize(null);
    setCircleRadius(50);
    setGridValues(Array(9).fill(0));
    setFilteredImage(null);
  }

  switch (step) {
    case 1:
      return (
        <Step1 onImageUpload={handleImageUpload} />
      );
    case 2:
      return (
        <Step2 onFilterTypeSelect={handleFilterTypeSelect} />
      );
    case 3:
      return (
        <Step3
          filterType={filterType}
          onFilterSizeSelect={handleFilterSizeSelect}
          onCircleRadiusChange={handleCircleRadiusChange}
          circleRadius={circleRadius}
          setCenter = {setCenter}
          isinverse = {setIsInverse}
        />
      );
    case 4:
      return (
        <Step4
          filterSize={filterSize}
          onGridValueChange={handleGridValueChange}
          gridValues={gridValues}
          nextStep={goToStep5}
        />
      );
    case 5:
      return (
        <Step5 onSubmit={handleFormSubmit} />
      );
    case 6:
      return (
        <Result
          filteredImage={filteredImage}
          onTryAgain={handleTryAgain}
        />
      );
    default:
      return null;
  }
}

export default App;
