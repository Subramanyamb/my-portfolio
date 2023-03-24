import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience2.css';

const IPrism = () => {
  const iprismData = [
    {
      title: "Developed a web application by using Angular4 as front-end by using Web API to receive and pass data to back-end.",
      id: 1
    },
    {
      title: "Used Angular-CLI for initializing and for project setup with scaffolding features.",
      id: 2
    },
    {
      title: "Designed and developed web pages using with HTML5, DHTML, XHTML, CSS3, Ajax, based on the W3C standards and Web 2.0.",
      id: 3
    },
    {
      title: "Built Angular 4/2 components, UI services to consume rest services using Component based architecture provided by Angular 2.",
      id: 4
    },
    {
      title: "Implemented Angular 4/2 component router for navigation, Angular 4/2 services to connect the web application to back-end APIs made use of ES6 features.",
      id: 5
    },
    {
      title: "Generated responsive data tables using with Bootstrap grid system.",
      id: 6
    },
    {
      title: "Implemented Angular, Bootstrap, LESS, and many JQuery plugins wrapped in Angular directives.",
      id: 7
    },
    {
      title: "Used Nodejs for adding dependencies to project.",
      id: 8
    },
    {
      title: "Wrote application-level code to interact with backend and consume the JSON by using RXJS Observables.",
      id: 9
    },
    {
      title: "Designed and modified User Interfaces using CSS and Angular.",
      id: 10
    },
    {
      title: "Worked closely with business-side clients to deliver attractive, easy-to-understand screens that appropriate reflected the company's fulfillment workflow.",
      id: 11
    },
    {
      title: "Performed code review and code quality check process.",
      id: 12
    },
    {
      title: "Followed Agile Methodology for the complete life cycle of the project and partook in daily stand-up meetings.",
      id: 13
    },
    {
      title: "Configured typescript application through tsconfig file for various purposes like transpiring, debugging, tracing, generating separate folder for distributable etc.",
      id: 14
    },
    {
      title: "Used Filters to change modify data.",
      id: 15
    },
    {
      title: "Committed code change into repository by using version control tool Git.",
      id: 16
    },
    {
      title: "Implemented Services to store shared data between sibling components and inject into it for passing data purpose.",
      id: 17
    },
    {
      title: "Transferred data between parent and child components by using @Input and @Output.",
      id: 18
    },
    {
      title: "Used Node Package Manager (NPM) to import and applications.",
      id: 19
    },
    {
        title: "Worked with task runners like Gulp in deploying and testing the application.",
        id: 20
    },
    {
        title: "Created Images, Logos and Icons that are used across the web pages using Adobe Flash and Photoshop.",
        id: 21
    },
    {
        title: "Interacted with other developers and end users to design and implement new features throughout the framework.",
        id: 22
    },
  ]

  return (
    <section>
      <h2>IPRISM TECHNOLOGIES</h2>
      <h5>UI Developer</h5>
      <div className="container experience2__container">
        <div className="experience2__frontend">
          <h3>My Resonsibilites</h3>
          <div className="experience2__content">
            {
              iprismData.map((data) => (
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

export default IPrism