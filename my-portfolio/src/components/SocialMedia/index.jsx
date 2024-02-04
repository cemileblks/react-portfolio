import React from 'react';
import './SocialMedia.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

function SocialMedia() {
    return (
        <div className='social-media-wrapper d-flex justify-content-evenly align-items-center mb-4'>
            <a href="https://github.com/cemileblks" target="_blank" rel="noopener noreferrer" aria-label="Link to GitHub" className="icon">
            <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
            <a href="https://www.linkedin.com/in/cemile-b-606084146/" target="_blank" rel="noopener noreferrer" aria-label="Link to LinkedIn" className="icon">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
            <a href="mailto:cemilebalkas@gmail.com" aria-label="Send an Email" className="icon">
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
            </a>
            <a className='btn button-pink' href="./assets/docs/CV.pdf" target="_blank" rel="noreferrer" download>Download my CV</a>
        </div>
    );
}

export default SocialMedia;
