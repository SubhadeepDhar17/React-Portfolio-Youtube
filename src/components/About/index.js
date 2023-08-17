import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>About Me</h1>
                    <p>I am very ambitious and hard working. i got into front end
                        developemnet since i was 15. Been using HTML since 8th grade
                        and slowly upraded to CSS in 10th. 
                    </p>
                    <p>I am very ambitious and hard working. i got into front end
                        developemnet since i was 15. Been using HTML since 8th grade
                        and slowly upraded to CSS in 10th. 
                    </p>
                    <p>I am very ambitious and hard working. i got into front end
                        developemnet since i was 15. Been using HTML since 8th grade
                        and slowly upraded to CSS in 10th. 
                    </p>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4d9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color='#efd81d' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faReact} color='#5de4f4' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#ec4d28' />
                    </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About;