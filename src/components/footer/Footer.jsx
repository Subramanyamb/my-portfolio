import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Subramanyam B</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Education</a></li>
        <li><a href="#testmonials">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/subramanyam-b-5a982523b" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Subramanyamb" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer