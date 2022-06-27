import React from 'react';
import profileImage from "../../assets/profileImage.jpeg";


function About() {
    return (
        <section className="my-5">
            <h1 id="about">Full Stack Web Developer</h1>
            {/* insert running text of skills here: HTML CSS JS etc... */}
            <img src={profileImage} className="my-2" style={{ width: "25%" }} alt="picture of myself" />
        </section>
    );
}

export default About;