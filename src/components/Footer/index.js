import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram, FaHeart } from 'react-icons/fa';

function Footer() {
    return (
        <footer>

            <div className='container'>
                <a href='https://github.com/ancs214' target='_blank'><FaGithub className='icon'></FaGithub></a>
                <a href='https://www.linkedin.com/in/ashley-noel-swarn-8351a2220/' target='_blank'><FaLinkedin className='icon'></FaLinkedin></a>
                <a href='mailto:ancs214@gmail.com' target='_blank'><FaTelegram className='icon'></FaTelegram></a>
            </div>

            <div className='container'>
                <p>
                    Created with  < FaHeart /> by Ashley-Noel Swarn
                </p>
            </div>
        </footer>
    )
}

export default Footer;