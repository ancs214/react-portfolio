import React from 'react';
import profileImage from "../../assets/profileImage.jpeg";



function About() {
    return (
        <section className="card my-5">
            <div>
            <h1>Full Stack Web Developer</h1>
            <p className='container'>
                Nurse gone web dev! 
                <br /> I've been a Registered Nurse for four years. This has allowed me time to develop excellent communication and teamwork skills that will cross over well in the field of web development. I completed the Ohio State University Full Stack Web Development Bootcamp in July 2022, and I'm looking for opportunities to showcase my skills and continue learning. 
                <br /> My skillset includes: HTML, CSS, JAVASCRIPT, Node.js, Express.js, SQL, noSQL (GraphQL), React, and MongoDB (MERN stack).
            </p>
            </div>
            <div>
            <img src={profileImage}  style={{ width: "30%" }} alt="Ashley-Noel" />
            </div>
        </section>
    );
}

export default About;