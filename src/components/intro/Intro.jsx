import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from '../../assets/AboutMeImage.jpeg';
import "./intro.css";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2 style={{ paddingBottom: '30px' }}>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="MyImage" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>I have 8 years of extensive industry experience in designing and developing dynamic web pages.</h5>
              {/* <small>1.5 year</small> */}
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>I have experience working on scalable environment in Agile and Scrum Methodologies.</h5>
              {/* <small>10+ Completed Projects</small> */}
            </article>
          </div>
          <p>
          I have proficient experience in Web application development using HTML5, CSS3, JavaScript, JSON,
jQuery, Type Script, ReactJS and expert knowledge in designing wireframes, dashboards, and the
custom components. Experience in Version Control tools like CVS, GIT, SVN and Clear-Case for Source Code version management and in deployment platform and coordinating code builds promotions using Jenkins and
GitHub. Experience in all phases of software development life cycle (SDLC) like Requirement Analysis,
Implementation, Maintenance, and extensive experience with Agile and SCRUM.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
