import React, { useState, useEffect } from "react";
import "./collegemain.css";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


export default function FiltersCollege({ sendDataToParent }) {
    const [formData, setFormData] = useState({
        //college_name: 'Any',
        //type: 'Any',
        sort_by: 'Name',
        order: true
    });

    //const [inputValue, setInputValue] = useState('Any');
    //const [dropdownOptions, setDropdownOptions] = useState([]);
    const [term, setTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleChange1 = async (event) => {
        const inputdata = event.target.value;
        setTerm(inputdata);
        // try {
        //     const response = await axios.get(`/en/data?term=${inputdata}`);
        //     const data = response.data;
        //     setSuggestions(data);
        // } catch (error) {
        //     console.log("error", error);
        // }
    };
    const handleSuggestionClick = (selectedSuggestion) => {
      /*  setFormData({
            ...formData,
            ["college_name"]: selectedSuggestion
        });
        setTerm(selectedSuggestion);
        setSuggestions([]);*/
    };



    useEffect(() => {
        sendDataToParent(formData);
    }, [formData, sendDataToParent]);

    const handleToggle = () => {
        setFormData({
            ...formData,
            order: !formData.order
        });
    };

    return (
        <div className="filtersCollege">
            <div className="filter1College">
                <input type="text" spellCheck="false" placeholder="search for institutions" name="college_name" value={term} onChange={handleChange1}></input>
            </div>
            <div className="suggestionsCollege">
                {suggestions.map((suggestion, index) => (
                    <p key={index} className="suggestionCollege" onClick={() => handleSuggestionClick(suggestion)}>
                        {suggestion}
                    </p>
                ))}

            </div>
            <div className="filter2College">
                <select name="type" id="year" value={formData.type} onChange={handleChange}>
                    <option value="Any">Any</option>
                    <option value="Bookmarked">Bookmarked</option>
                </select>
            </div>
            <div className="filter3College">
                <select name="sort_by" id="year" value={formData.sort_by} onChange={handleChange}>
                    <option value="Name">Name</option>
                    <option value="Likes">Likes</option>
                    <option value="Upload Date">Upload Date</option>
                </select>
            </div>
            <div className="filter4College">
                <button name="order" onClick={handleToggle}>
                    {formData.order ? <> Ascending  <FontAwesomeIcon icon={faArrowUp} /></> : <> Descending  <FontAwesomeIcon icon={faArrowDown} /></>}
                </button>
            </div>
        </div>
    );
}