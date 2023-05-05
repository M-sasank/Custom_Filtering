import React, { useState } from 'react';

function Step1({ onImageUpload, setImgfeatures}) {
  const [image, setImage] = useState(null);

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
    <div>
      <h2>Step 1: Upload an Image</h2>
      <div>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {image && (
          <div>
            <img src={image} alt="Uploaded image" />
          </div>
        )}
      </div>
      <button onClick={handleNextClick} disabled={!image}>
        Next
      </button>
    </div>
  );
}

export default Step1;
