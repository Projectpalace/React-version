import React,{useState} from "react";
import "./studentcard.css"

export default function StudentCard() {

  const [file,setFile]=useState(null);
    const [formData,setFormData]=useState({
        category: 'Any',
        search:'',
    });

  function adjustSelectSize() {
    const selectElement = document.getElementById('cars');
    const selectedOption = selectElement.options[selectElement.selectedIndex];

    // Calculate the width based on the text content of the selected option
    const width = getTextWidth(selectedOption.text) + 40; // Add some padding

    // Set the width of the select element
    selectElement.style.width = width + 'px';
  }

  function getTextWidth(text) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = getComputedStyle(document.body).font; // Match the font of the document body
    const metrics = context.measureText(text);
    return metrics.width;
  }
  const save = (event) => {
    setFormData({
      ...formData,
      category: event.target.value
    });
    adjustSelectSize();
  };

  return (

    <div className="bodySC">
      <div className="bodyySC">
        
        <div className="stageSC">
          <div className="row1">
            <div className="wrapperSC">
              <div className="user-cardSC">
                <div className="user-card-imgSC">
                  <img src="test.png" alt="" />
                </div>
                <div className="user-card-infoSC">
                  <h2>T.Nithin</h2>
                  <p><span>Email:</span> nithinchowdary2354@gmail.com</p>
                  <p><span>college:</span> Keshav memorial inst</p>
                  <p><span>Languages known:</span> Html , css, pyhton,js,cpp</p>
                  <p><span>project count:</span> 6</p>
                </div>
              </div>
            </div>

          </div>
        </div>




      </div></div>

  )
}