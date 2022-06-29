import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

function Resume() {
    return (
        <div className='container'>
            <a href='https://github.com/ancs214' target='_blank'><FaGithub className='icon'></FaGithub></a>
            <a href='https://www.linkedin.com/in/ashley-noel-swarn-8351a2220/' target='_blank'><FaLinkedin className='icon'></FaLinkedin></a>
            <a href='mailto:ancs214@gmail.com' target='_blank'><FaTelegram className='icon'></FaTelegram></a>
        </div>
    )
}

export default Resume;