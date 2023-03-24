import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience2.css';

const Att = () => {
  const attData = [
    {
      title: "Developed web presentation layer using HTML, CSS, JavaScript, ReactJS according to internal standards and guidelines.",
      id: 1
    },
    {
      title: "Involved designing mock-ups for mobile web Application (iOS, Android) mostly using Sketch, Figma and Adobe Creative Suite.",
      id: 2
    },
    {
      title: "Used Figma to create wireframes for mobile-based applications before the development process.",
      id: 3
    },
    {
      title: "Creating Web application architecture by creating User flows. Once the end client approves the architecture the design and development team get to work.",
      id: 4
    },
    {
      title: "Created wireframes for Mobile based application on Figma, for the mockups.",
      id: 5
    },
    {
      title: "Contacting the clients and working on the UX research and design the prototypes of Figma and eventually converting the look on the HTML/CSS/JS platform.",
      id: 6
    },
    {
      title: "Created wireframes for complex user interface designs in both Figma and Illustrator.",
      id: 7
    },
    {
      title: "Advocates for the users' experience and a user-cantered design approach to feature development O Evolves and matures UX design & engineering approach within an agile development organization",
      id: 8
    },
    {
      title: "Enhanced the design workflow by introducing Figma, Axure and Invision which allowed for quicker results of prototypes for testing.",
      id: 9
    },
    {
      title: "Established a mobile experience plan for content creation.",
      id: 10
    },
    {
      title: "Responsible for design the web pages from mockups and Wire framing mostly using Axure.",
      id: 11
    },
    {
      title: "Created early prototypes, wireframes, user flows and user interactions according to the client instructions. Heavy p to the visual design.",
      id: 12
    },
    {
      title: "Communicated with the FRS clients for product design.",
      id: 13
    },
    {
      title: "Responsible for creating efficient design and developing Graphic User Interaction screens using HTML5, CSS3, JavaScript and Bootstrap.",
      id: 14
    },
    {
      title: "Written controllers and components that are responsible to hold model data, call back functions and for rendering views",
      id: 15
    },
    {
      title: "Used Bootstrap to show and hide classes for different and grid classes to create RWD.",
      id: 16
    },
    {
      title: "Developed data insertion forms and validated them using JavaScript.",
      id: 17
    },
    {
      title: "Used jQuery to make the HTML and CSS code interact with the JavaScript functions to add dynamism to the web pages at the client side.",
      id: 18
    },
    {
      title: "Closely worked with Business analyst to understand the technical requirements of the projects.",
      id: 19
    },
    {
        title: "Responsible for developing cross browser compatible application and hence worked on different browsers like Safari, Internet explorer, Firefox and Google chrome.",
        id: 20
    },
    {
        title: "Used Agile (SCRUM) methodologies during project development.",
        id: 21
    },
    {
        title: "Used JIRA for Project tracking.",
        id: 22
    },
    {
        title: "Implemented chained select plugin for jQuery with JSON processing and callback feature, chain multiple selects with ease.",
        id: 23
    },
    {
        title: "Used Safari web inspector and chrome developer tools for debugging.",
        id: 24
    },
    {
        title: "Involved in all stages of Software Development Life Cycle.",
        id: 25
    },
    {
        title: "Used GIT for version controlling.",
        id: 26
    },
  ]

  return (
    <section>
      <h2>AT&T</h2>
      <h5>Web Designer</h5>
      <div className="container experience2__container">
        <div className="experience2__frontend">
          <h3>My Resonsibilites</h3>
          <div className="experience2__content">
            {
              attData.map((data) => (
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

export default Att