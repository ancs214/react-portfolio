import React from "react";
import Typical from 'react-typical';

function Skills() {
    return (
        <Typical
        steps={
          [
            'HTML / CSS', 1000, 
            'JAVASCRIPT', 1000,
            'Node.js', 1000,
            'Express.js', 1000,
            'mySQL', 1000,
            'GraphQL', 1000,
            'React', 1000,
            'MongoDB', 1000,
          ]
        }
        loop={Infinity}
        wrapper="skills"
      />
    )
}

export default Skills;