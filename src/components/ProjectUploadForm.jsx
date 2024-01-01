import React,{useState} from "react";
// import Header from "./header";
import "./ProjectUpload.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';



export default function ProjectUploadForm(){

    
    

    const [formData,setFormData]=useState({
        category: 'Any',
        search:'',
    });
    // useEffect(() => {
    //     takedata(formData);
    // }, [formData, takedata]);
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
    <div className="bod">
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
                <p className="profileset-p">
                    <FontAwesomeIcon icon={faUser} className="profileset-icon"/>
                </p>
                
                </div>
    
            </div>
        
            </div>


        <div className="bodyy"> 
            <div className="filters">
                <div className="filter1">
                    <select name="year" id="college">
                        <option value="volvo">
                            
                                ascending 
                        </option>
                        <option value="saab">decsending</option>
                        
                    </select>
                </div>
                <div className="filter2">
                    <select name="year" id="year">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opelufkuygarkfyugaery</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="filter3">
                    <select name="year" id="year">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opelufkuygarkfyugaery</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="filter4">
                    <select name="year" id="sortby">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opelufkuygarkfyugaery</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
            </div>
             
            
                <div className="studetails">
                    <div className="sdetails">
                        <div className="probackground">
                            <p className="probackground-p">
                                Project upload
                            </p>
                        </div>
                        <div className="sphoto">
                        <label htmlFor="profilePic">
                            {/* <i className="fa-solid fa-user-plus" style={{ color: 'rgb(4, 67, 112)' }}></i> */}
                            <FontAwesomeIcon icon={faUserPlus} className="addPhoto" />
                        
                                <br />
                                <p className="sphoto-p">
                                    add photo 
                                </p>
                            </label>
                            <input type="file" name="profilePic" id="profilePic" accept="image/*" className="sphoto-input"/>
                         
                        </div>
                        <div className="sname">
                            
                                <p>project title:   <input type="text" spellcheck="false" className="sname-input"/></p>

                            
                        </div>
                        
                    </div>
                    </div>
                    
                    <div className="pform">
                            <p>
                                Select project domain:
                                <select name="category" id="cars" onchange="adjustSelectSize()" className="pform-select">  
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
                                    <option value="Any">Not listed</option>
                                </select>
                            </p>
                            <div className="dscrpt">
                                <p className="description">
                                    <label for="description">Description:</label>
                                    <textarea name="description" id="description" rows="5" required="" className="dscrpt-textarea"></textarea>
                                </p>
                                    <div className="file-upload">
                                        <p className="file-upload-p">
                                            <input type="file" id="file-upload" className="file-upload-input" />
                                            <label for="file-upload">
                                                <button onclick="selectFolder()" className="file-upload-button">
                                                    Upload folder
                                                </button>
                                            </label>
                                            <br />
                                            drag files here
                                        </p>
                                    </div>
                            </div>
                            <div className="lang">
                                <p className="lang-p">
                                    Languages used:
                                </p>
                                <div id="langContainer">
                                    
                                    <input type="text" id="searchInput" placeholder="Add languages..." />
                                    <div id="tagContainer"></div>
                                </div>
                            </div>
                            <div className="media-upload">
                                <p className="video">
                                    Upload media:
                                    <button onclick="selectFolder()" className="media-upload-button">
                                        Upload video
                                    </button>
                                    <button onclick="selectFolder()" className="media-upload-button">
                                        Upload photos
                                    </button>
                                </p>
                            </div>
                            <div className="team-mem">
                                <p>
                                    Add your team members:
                                </p>
                                    <div id="groupContainer">
                                        <div id="tagGroupmem"></div>
                                        <input type="text" id="searchGroupmem" placeholder="Search..." />
                                    </div>
                            </div>

                           
                            

                            
                            
                    </div>
                    
            
            
        </div>
    </div>
    );

}