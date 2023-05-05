import React from 'react';

function Result({ original, getfilteredImage, onTryAgain, filterType }) {
  let images = [original];
  let comp = (<></>);
  if(filterType === 'spatial') {
    images.push(getfilteredImage.image);
    comp = (<div className = 'container'>
      <style>{'\n' +
            '@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");\n' +
            '@import url(\'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap\');\n' +
            '\n' +
            '* {\n' +
            '  margin: auto;\n' +
            '  padding: 20px;\n' +
            '  box-sizing: border-box;\n' +
            '  font-family: "Poppins", sans-serif;\n' +
            '}\n' +
            '\n' +
            '.container {\n' +
            '  height: 100vh;\n' +
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
            '  width: 600px;\n' +
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
  'width : 512px;'+
    'height : 512px;'+
  'margin : 10px;'+
  'padding : 10px;'+
'}'
        } </style>
          <div className = 'card'>
      <h2>Result: Filtered Image</h2>
      <p>The Original image is displayed below:</p>
      <img src={`data:image/png;base64,${images[0]}`} alt="Original Image" />
      <p>The filtered image is displayed below:</p>
      <img src={`data:image/png;base64,${images[1]}`} alt="Filtered Image" />
      <br />
      <button  className = 'btn' onClick={onTryAgain}>Try Again</button>
            </div>
    </div>);
  }
  else{
    images.push(getfilteredImage.image);
    images.push(getfilteredImage.spectrum);
    console.log(images)
        comp = (<div className = "container">
        <style>{'\n' +
            '@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");\n' +
            '@import url(\'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap\');\n' +
            '\n' +
            '* {\n' +
            '  margin: auto;\n' +
            '  padding: 20px;\n' +
            '  box-sizing: border-box;\n' +
            '  font-family: "Poppins", sans-serif;\n' +
            '}\n' +
            '\n' +
            '.container {\n' +
            '  height: 100vh;\n' +
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
            '  width: 600px;\n' +
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
  'width : 512px;'+
    'height : 512px;'+
  'margin : 10px;'+
  'padding : 10px;'+
'}'
        } </style>
          <div className = 'card'>
      <h2>Result: Filtered Image</h2>
      <p>The Original image is displayed below:</p>
      <img src={`data:image/png;base64,${images[0]}`} alt="Original Image" />
      <br/>
            <br />
            <br />
      <p>The filtered image is displayed below:</p>
      <img src={`data:image/png;base64,${images[1]}`} alt="Filtered Image" />
      <br />
            <br />
            <br />
      <p>The spectrum of the filtered image is displayed below:</p>
      <img src={`data:image/png;base64,${images[2]}`} alt="Filtered Image" />
      <br />
      <button className = 'btn' onClick={onTryAgain}>Try Again</button>
            </div>
    </div>);
  }
  return (
    <div>
      {comp}
    </div>
  );
}

export default Result;
