import React from 'react';


function Projects() {
    return (
        <section>
            <h1 className='h2 container'>Projects</h1>
            <div className='grid'>
                <div>
                    <a href='https://peaceful-beach-75980.herokuapp.com/' target='_blank'>
                    <img
                        src={require('../../assets/i++.png')}
                        alt='project i++ screenshot'

                    /></a>
                    
                    <a href='https://github.com/ancs214/RunFinder/' target='_blank'>
                    <img
                        src={require('../../assets/run_chug.png')}
                        alt='project run n chug screenshot'

                    /></a>
                    
                </div>
                <div>
                <a href='https://ancs214.github.io/run-buddy/' target='_blank'>
                    <img
                        src={require('../../assets/runbuddy.png')}
                        alt='project runbuddy screenshot'

                    /></a>
                    <a href='https://ancs214.github.io/taskmaster-pro/' target='_blank'>
                    <img
                        src={require('../../assets/taskmaster.png')}
                        alt='project taskmaster screenshot'

                    /></a>
                </div>

            </div>
        </section>
    )
}

export default Projects;