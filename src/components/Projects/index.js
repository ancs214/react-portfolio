import React from 'react';


function Projects() {
    return (
        <section>
            <h1 className='h2 container'>Projects</h1>
            <div className='grid'>
                <div>
                    <img
                        src={require('../../assets/i++.png')}
                        alt='project i++ screenshot'

                    />
                    <img
                        src={require('../../assets/run_chug.png')}
                        alt='project run n chug screenshot'

                    />
                </div>
                <div>
                    <img
                        src={require('../../assets/runbuddy.png')}
                        alt='project runbuddy screenshot'

                    />
                    <img
                        src={require('../../assets/taskmaster.png')}
                        alt='project taskmaster screenshot'

                    />
                </div>

            </div>
        </section>
    )
}

export default Projects;