import React from 'react';

function Project() {
    return (
        <div className='container flex-row'>
            <div>
            <img 
            src={require('../../assets/i++.png')} 
            alt='project i++ screenshot'
            className='img-thumbnail mx-1'
            />
            <img 
            src={require('../../assets/run_chug.png')} 
            alt='project run n chug screenshot'
            className='img-thumbnail mx-1'
            />
            </div>
            <img 
            src={require('../../assets/runbuddy.png')} 
            alt='project runbuddy screenshot'
            className='img-thumbnail mx-1'
            />
            <img 
            src={require('../../assets/taskmaster.png')} 
            alt='project taskmaster screenshot'
            className='img-thumbnail mx-1'
            />
            <img 
            src={require('../../assets/notetaker.png')} 
            alt='project notetaker screenshot'
            className='img-thumbnail mx-1'
            />
            <img 
            src={require('../../assets/zoo_keepr.png')} 
            alt='project zoo keepr screenshot'
            className='img-thumbnail mx-1'
            />
    

        </div>
    )
}

export default Project;