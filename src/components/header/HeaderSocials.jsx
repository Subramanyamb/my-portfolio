import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/subramanyam-b-5a982523b" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Subramanyamb" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials