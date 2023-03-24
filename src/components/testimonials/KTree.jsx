import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience2.css';

const KTree = () => {
  const ktreeData = [
    {
      title: "Developed the User Interactive web pages in a professional manner using web technologies like HTML, XHTML and CSS based on the W3C and ADA standards.",
      id: 1
    },
    {
      title: "Fixed the HTML errors in site core content editor.",
      id: 2
    },
    {
      title: "Developed client-side validation code using JavaScript and jQuery.",
      id: 3
    },
    {
      title: "Front-end GUI development using browser friendly JavaScript, AJAX, CSS, jQuery.",
      id: 4
    },
    {
      title: "Designed dynamic client-side JavaScript, codes to build web forms and simulate process for web application, page navigation and form validation.",
      id: 5
    },
    {
      title: "Worked on applying UI Principles and Human Factors Principles and Factors for all the web and application products of CDC both Internal and external domains.",
      id: 6
    },
    {
      title: "Ongoing new requirements gathering and updating on regular basis.",
      id: 7
    },
    {
      title: "Played a programmer role in UI design and development of the front-end architecture.",
      id: 8
    },
    {
      title: "Gathered the data from the backend using AJAX and jQuery, JSP.",
      id: 9
    },
    {
      title: "Involved in using React JS components, Forms, Events, Keys, Router and Flux concept and in building stable React components and stand-alone functions to be added to any future pages.",
      id: 10
    },
    {
      title: "Used SVN for code repository and version control.",
      id: 11
    },
    {
      title: "Participated in Code review and Quality Assurance. Automated the functionality and interface testing of the application using Quick Test Professional (QTP).",
      id: 12
    },
  ]

  return (
    <section>
      <h2>KTREE COMPUTER SOLUTIONS</h2>
      <h5>Jr. Web Developer</h5>
      <div className="container experience2__container">
        <div className="experience2__frontend">
          <h3>My Resonsibilites</h3>
          <div className="experience2__content">
            {
              ktreeData.map((data) => (
                <article key={data.id} className="experience2__details">
                  <BsFillPatchCheckFill className="experience2__details-icon" />
                  <h4>{data.title}</h4>
                </article>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default KTree