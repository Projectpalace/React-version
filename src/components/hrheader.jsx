import React,{useState,useEffect} from "react";
import "./hr-page.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faUser, faUserPlus, faBars, faHeart, faHouse } from '@fortawesome/free-solid-svg-icons';
// import { faSearch ,faUser} from '@fortawesome/free-solid-svg-icons';




export default function Header({takedata,handlesearch, toggleDashboard1,handlehrdetail, toggleSider}){
    const [formData,setFormData]=useState({
        category: 'Any',
        search:'',
    });
    const [searchterm,setSearchTerm]=useState('');
    const handlesearchchange=async (event)=>
    {
        event.preventDefault();
        setSearchTerm(event.target.value);
        

    }
    
    

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
        <div className="header1" id="hhhhead">
            <div className="headerset1">
                <div className="logoset1">
                    <div className="dash1">
                            <span className="btn1" ><FontAwesomeIcon icon={faBars} style={{ color: "aliceblue" }} /></span>
                    </div>

                    <div className="logo1">
                        <FontAwesomeIcon icon={faProductHunt} style={{color: "#0db1f8",}} />
                        {/* <img src='../Plogo.png' style={{ width: '100px', height: 'auto', paddingTop: '17px' }}/> */}
                    </div>
                    <div className="title1">
                        <p>Project</p>
                    </div>
                </div>
                <div className="searchbarset1">
                    <div className="domain1">
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
            
                    <div className="searchbar1">
                        <input type="search" className="searchs1" spellcheck="false" placeholder="Search for projects" value={searchterm} onChange={(event)=>{handlesearchchange(event)}}></input>
                    </div>
                    <div className="search-icon1">
                        <FontAwesomeIcon className="i" icon={faSearch} style={{color: "white"}} onClick={()=>{handlesearch(searchterm)}}/>
                    </div>
                </div>
                <div className="profileset1">
                <p>
                <FontAwesomeIcon icon={faUser} className="profileset-icon" onClick={() => {toggleDashboard1();handlehrdetail()}}/>
                </p>
                
                </div>
    
            </div>
        
        </div>
);
}
