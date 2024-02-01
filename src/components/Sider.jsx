import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
// import "./signin.css"

export default function Sider(){
    return(
        <div className="content120" id="sider20">
                <div className="sider-slogan20">
                    <p>
                    From Concept to Completion
                    </p>
                </div>
                <div className="sider-contents20">
                    <p>
                        <FontAwesomeIcon icon={faCircleCheck} size="lg" />
                        lCode empowers evolution
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faCircleCheck} size="lg" />
                        lWhere Imagination meets Achievement
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faCircleCheck} size="lg" />
                        From Cool Concepts to Epic Realities 
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faCircleCheck} size="lg" />
                        Innovate through scripting
                    </p>
                </div>
        </div>
    )
}