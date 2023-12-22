import React,{useState,useEffect} from "react";
import "./hr-page.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';




export default function Header({takedata}){
    const [formData,setFormData]=useState({
        category: 'Any',
        search:'',
    });
    useEffect(() => {
        takedata(formData);
    }, [formData, takedata]);
    function adjustSelectSize() {
        const selectElement = document.getElementById('cars');
        const selectedOption = selectElement.options[selectElement.selectedIndex];
  
        // Calculate the width based on the text content of the selected option
        const width = getTextWidth(selectedOption.text) +40 ; // Add some padding
  
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
    return(
        <div className="header">
            <div className="headerset">
                <div className="logoset">
                    <div className="logo">
                        <FontAwesomeIcon icon={faProductHunt} style={{color: "#0db1f8",}} />
                    </div>
                    <div className="title">
                        <p>Project</p>
                    </div>
                </div>
                <div className="searchbarset">
                    <div className="domain">
                        <form id="domain">
                            <select name="category" id="cars" onChange={save}>
                                <option value="Any">Any</option>
                                <option value="Web development">Web development</option>
                                <option value="App development">App development</option>
                                <option value="Data Science and Analytics">Data Science and Analytics</option>
                                <option value="Game development">Game development</option>
                                <option value="Cyber Security">Cyber Security</option>
                                <option value="Artificial Intelligence and Robotic">Artificial Intelligence and Robotics</option>
                                <option value="Embedded systems and IOT(Sensors)">Embedded systems and IOT(Sensors)</option>
                                <option value="E-Commerce and Marketplace development">E-Commerce and Marketplace development</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Software development">Software development</option>
                            </select>
                        </form>
                    </div>
            
                    <div className="searchbar">
                        <input type="search" className="searchs" spellcheck="false" placeholder="Search for projects"></input>
                    </div>
                    <div className="search-icon">
                        <FontAwesomeIcon className="i" icon={faSearch} style={{color: "white"}}/>
                    </div>
                </div>
                <div className="profileset">
                <p>

                </p>
                
                </div>
    
            </div>
        
        </div>
);
}