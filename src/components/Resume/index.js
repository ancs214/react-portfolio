import React from 'react';
import resume from '../../assets/Resume.png';
import resumePdf from '../../assets/ASwarnResume.docx';
import Skills from '../Skills/index';


function Resume() {
    return (
        <div className='container'>
            <a><h2>Proficiencies</h2></a>
            <div className='skills'>
            <Skills />
            </div>
            <a href={resumePdf} download>
                <h2>Downloadable Resume:</h2>
                <img src={ resume } style={{ width: '40%' }} alt="resume" />
            </a>
        </div>
    )
}

export default Resume;