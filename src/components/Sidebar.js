import React from "react";
import Photo from "../assets/img/circularheadshot.png";

const Sidebar = ({handlePageChange}) => {

    return (
        <>
            <div className="sidebar">
                <img src={Photo} alt="Emerson Albert" />
                <h1>Emerson Albert</h1>
                <button onClick={() => handlePageChange('About')}>About</button>
                <button onClick={() => handlePageChange('Projects')}>Projects</button>
                <button onClick={() => handlePageChange('Contact')}>Contact</button>
                <div id="resume">
                    <a href="https://drive.google.com/file/d/1bKkxW758mSHK6OtwCKw6_jI2pUWCnDQH/view?usp=sharing">Resume</a>
                </div>
            </div>
        
        </>
    )
}

export default Sidebar;