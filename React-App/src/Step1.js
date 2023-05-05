import React, { useState } from 'react';
function Step1({ onImageUpload, setImgfeatures}) {
  const [image, setImage] = useState(null);

//   const dropArea = document.querySelector(".drop_box"),
//   button = dropArea.querySelector("button"),
//   input = dropArea.querySelector("input");
//
// button.onclick = () => {
//   input.click();
// };
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // const img = new Image();
        // img.onload = () => {
        //     setImgfeatures({w: img.width, h: img.height});
        // }
        setImage(e.target.result);
     };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleNextClick = () => {
    onImageUpload(image);
  };

  return (

    <div className="container"><style>{'\n' +
            '@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");\n' +
            '@import url(\'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap\');\n' +
            '\n' +
            '* {\n' +
            '  margin: 0;\n' +
            '  padding: 0;\n' +
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
  'width : 256px;'+
    'height : 256px;'+
  'margin : 10px;'+
  'padding : 10px;'+
'}'
        } </style>

      <div className = 'card'>
          <h2>Step 1: Upload an Image</h2>
          <div className = 'drop_box'>
              <header>
        <h4>Select File here</h4>
      </header>
      <p>Files Supported: PNG, JPEG</p>
              {/*<input type="file" hidden accept="image/*" id="fileID" style="display:none;" onChange={handleImageChange}/>*/}
        <input className="btn" type="file" accept="image/*" onChange={handleImageChange} />
              {/*<button className="btn">Choose File</button>*/}
        {image && (
          <div className = 'img1'>
            <img width={256} height={256} src={image} alt="Uploaded image" />
          </div>
        )}
              </div><button className ="btn" onClick={handleNextClick} disabled={!image}>
          Next
      </button>
      </div>


    </div>

  );
}

export default Step1;
