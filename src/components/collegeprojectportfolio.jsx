import React, { useState, useEffect } from "react";
import "./studentProjectPortfolio.css";
//import { useNavigate } from "react-router-dom";
import { GoLink } from "react-icons/go";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";


export default function StudentProjectProfile({ dis, studata }) {
    const projid = studata;
    const [photolist, setPhotolist] = useState([]);
    const [projdata, setProjdata] = useState(null);
    const [showCopyMessage, setShowCopyMessage] = useState(false);
    
    const [skills,setskills]=useState([])
    const [students,setstudents]=useState([])
    const [key,setKey]=useState(0);
    const navigate=useNavigate();

    const exit = () => {
        console.log('yo');
        dis();
    };
    

    const share = async () => {
        try {
            await navigator.clipboard.writeText(`http://localhost:3000/clgmain/${projid}`);
            setShowCopyMessage(true);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    const transformDate = (date) => {
        const dateObj = new Date(date);
        const day = dateObj.getDate();
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const month = monthNames[dateObj.getMonth()];
        const year = dateObj.getFullYear();

        let dayWithSuffix;
        if (day === 11 || day === 12 || day === 13) {
            dayWithSuffix = day + 'th';
        } else {
            switch (day % 10) {
                case 1:
                    dayWithSuffix = day + 'st';
                    break;
                case 2:
                    dayWithSuffix = day + 'nd';
                    break;
                case 3:
                    dayWithSuffix = day + 'rd';
                    break;
                default:
                    dayWithSuffix = day + 'th';
            }
        }

        return `${dayWithSuffix} ${month} ${year}`;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('/en/getprojectdata', { data: projid });
                setProjdata(response.data);
                setPhotolist(response.data.photos);
            } catch (error) {
                console.error('Error fetching project data:', error);
            }
        };

        fetchData();
    }, [projid]);
    const fetchData = async () => {
        const response = await axios.post('/en/getprojectdata', { data: projid });
        setProjdata(response.data);
        setPhotolist(response.data.photos)
        
        setskills(response.data.Skills)
        setstudents(response.data.Students)
        setKey(response.data.Likes)
    };
    useEffect(() => {
        fetchData();
    }, [projid]);
    console.log(projdata)

    return (
        <div className="ourprojectdetails1">
            <div className="opbuttons1">
                <div className="opbtn1">
                    <div className="opback1" onClick={() => exit()} style={{ color: "aliceblue" }}>
                        <p><span>&#8592;</span>Go Back</p>
                    </div>
                    <div className="opshare1" onClick={() => share()} style={{ color: "aliceblue" }}>
                        <p>{showCopyMessage === false ? 'Copy Link ' : 'Link Copied'}<GoLink /></p>
                    </div>
                </div>
            </div>
            <div className="opprojects1">
                <div className="opdiv1">
                    <div className="opimvid1">
                        <div className="opvidname1"></div>
                        <div className="opprojectvideo1">
                            {projdata && (
                                <video height="500px" width="600px" src={`http://localhost:3000/en/image/${projdata.Video}`} type="video/mp4" controls />
                            )}
                        </div>
                        {photolist.length !== 0 && (
                            photolist.map((photo, index) => (
                                <img key={index} src={`http://localhost:3000/en/image/${photo}`} alt="VS" className="slectimage1" />
                            ))
                        )}
                    </div>
                    {projdata && (
                        <div className="opdetail1">
                            <div className="opprojectname1">
                                <div className="oppic1">
                                    {projdata && <img src={`http://localhost:3000/en/image/${projdata.photo}`} alt="VS" className="slectimage1" />}
                                </div>
                                <div className="oprealpro1">
                                    <p>{projdata.Project_Name}</p>
                                </div>
                            </div>
                            <div className="oppostedby1">
                                <p>{projdata.College}</p>
                            </div>
                            <div className="gettingdate1">
                                <div>
                                    <p> Posted on {transformDate(new Date(projdata.Date))}<span className="opnlikes1">{projdata.Likes} Likes</span> </p>
                                </div>
                            </div>
                            <div className="gettingdescription1">
                                <p>{projdata.Description}</p>
                            </div>
                            <div className="opfolder1">
                                <p>FOLDER<span>&#128193;</span></p>
                                {/* need to add explorer hyperlink here */}
                            </div>
                            <div className="ourdomain1">
                                <p>DOMAIN: {projdata.Domain}</p>
                            </div>
                            <div className="ourtechnology1">
                                <p>Technologies used: </p>
                                <ul>
                                    {skills.map((skill, index) => (
                                        <li key={index}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="studentsworking1">
                                <h3>Students worked:</h3>
                                {students.map((student, index) => (
                                    <div className="names1" key={index} onClick={()=>navigate(`/clgmain/${student.id}`)}><p>{student.stuname}</p></div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}