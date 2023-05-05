import React, { useState } from 'react';

function Step2({ onFilterTypeSelect }) {
  const [filterType, setFilterType] = useState(null);

  const handleFilterTypeChange = (event) => {
    setFilterType(event.target.value);
  };

  const handleNextClick = () => {
    onFilterTypeSelect(filterType);
  };

  return (
    <div className = "container">
      <style>{'\n' +
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
            'margin : 10px\n' +
            'padding : 10px;'+
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
            '}\n@import url(\'https://fonts.googleapis.com/css?family=Lato:400,500,600,700&display=swap\');\n' +
          '.wrapper{\n' +
          '  display: inline-flex;\n' +
          '  background: #fff;\n' +
          '  height: 100px;\n' +
          '  width: 400px;\n' +
          '  align-items: center;\n' +
          '  justify-content: space-evenly;\n' +
          '  border-radius: 5px;\n' +
          '  padding: 20px 15px;\n' +
          // '  box-shadow: 5px 5px 30px rgba(0,0,0,0.2);\n' +
          '}\n' +
          '.wrapper .option{\n' +
          '  background: #fff;\n' +
          '  height: 100%;\n' +
          '  width: 100%;\n' +
          '  display: flex;\n' +
          '  align-items: center;\n' +
          '  justify-content: space-evenly;\n' +
          '  margin: 0 10px;\n' +
          '  border-radius: 5px;\n' +
          '  cursor: pointer;\n' +
          '  padding: 0 10px;\n' +
          '  border: 2px solid lightgrey;\n' +
          '  transition: all 0.3s ease;\n' +
          '}\n' +
          '.wrapper .option .dot{\n' +
          '  height: 20px;\n' +
          '  width: 20px;\n' +
          '  background: #d9d9d9;\n' +
          '  border-radius: 50%;\n' +
          '  position: relative;\n' +
          '}\n' +
          '.wrapper .option .dot::before{\n' +
          '  position: absolute;\n' +
          '  content: "";\n' +
          '  top: 4px;\n' +
          '  left: 4px;\n' +
          '  width: 12px;\n' +
          '  height: 12px;\n' +
          '  background: #0069d9;\n' +
          '  border-radius: 50%;\n' +
          '  opacity: 0;\n' +
          '  transform: scale(1.5);\n' +
          '  transition: all 0.3s ease;\n' +
          '}\n' +
          'input[type="radio"]{\n' +
          // '  display: none;\n' +
          '}\n' +
          '#option-1:checked:checked ~ .option-1,\n' +
          '#option-2:checked:checked ~ .option-2{\n' +
          '  border-color: #0069d9;\n' +
          '  background: #0069d9;\n' +
          '}\n' +
          '#option-1:checked:checked ~ .option-1 .dot,\n' +
          '#option-2:checked:checked ~ .option-2 .dot{\n' +
          '  background: #fff;\n' +
          '}\n' +
          '#option-1:checked:checked ~ .option-1 .dot::before,\n' +
          '#option-2:checked:checked ~ .option-2 .dot::before{\n' +
          '  opacity: 1;\n' +
          '  transform: scale(1);\n' +
          '}\n' +
          '#option-1:checked {' +
          'background: #fff;' +
          '}' +
          '.wrapper .option span{\n' +
          '  font-size: 20px;\n' +
          '  color: #808080;\n' +
          '}\n' +
          '#option-1:checked:checked ~ .option-1 span,\n' +
          '#option-2:checked:checked ~ .option-2 span{\n' +
          '  color: #fff;\n' +
          '}'}</style>
        <style>{
            '.img1 {'+
  'width : 256px;'+
    'height : 256px;'+
  'margin : 10px;'+
  'padding : 10px;'+
'}' +
            '.option:hover{\n' +
            '  background-color: #0069d9;\n' +
            // '  color: #d9d9d9;\n' +
            '}' +
            'input[type="radio"]:checked + option option-1 {\n' +
            '  background-color: #61dafb;\n' +
            '  color: #282c34;\n' +
            '}' +
            'input[type=radio]{\n' +
            '    display:none;\n' +
            '}\n' +
            'input[type=radio] + label{\n' +
            '    border: 1px solid black;\n' +
            '    background-color: red;\n' +
            '    border-radius: 50%;\n' +
            '    display: block;\n' +
            '    ...\n' +
            '}\n' +
            'input[type=radio]:checked + label{\n' +
            '    background-color: green;\n' +
            '}' +
            '.option:checked ~ .dot {\n' +
            '  background-color: #2196f3;\n' +
            '}'
        } </style>
        <div className="card">
          <div className="drop_box">
      <h2>Step 2: Select Filter Type</h2>
      <div>
          <div className="wrapper">
        <label form="option-1" className="option option-1">
          <input
            type="radio"
            name="filterType"
            id="option-1"
            value="spatial"
            checked={filterType === 'spatial'}
            onChange={handleFilterTypeChange}
          />
          <div className="dot"></div>
            <span>Spatial</span>
        </label>
        <label form="option-2" className="option option-2">
          <input
            type="radio"
            id="option-2"
            name="filterType"
            value="frequency"
            checked={filterType === 'frequency'}




            onChange={handleFilterTypeChange}
          />
            <div className="dot"></div>
            <span>Frequency</span>
        </label>
          </div>
      </div>
      <button className = 'btn' onClick={handleNextClick} disabled={!filterType}>
        Next
      </button>
          </div>
        </div>
    </div>
  );
}

export default Step2;
