import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience2.css';

const Walmart = () => {
  const walmartData = [
    {
      title: "Understanding the business requirements, analyze and implement the technical solution designing the web pages and the components using different UX tools InVision, Sketch, Zeplin, Adobe XD, and Figma.",
      id: 1
    },
    {
      title: "Involve in User Research and Usability testing for both Web and Mobile Design for the digital applications.",
      id: 2
    },
    {
      title: "Responsible for creating mockups and wireframes for the business requirement after consultation and meeting with the Product Managers. The regular design tools, which I use, are iRise, Sketch, UXpin, Figma and Zeplin.",
      id: 3
    },
    {
      title: "Worked on Figma for the design requirements and Mockups.",
      id: 4
    },
    {
      title: "Responsible for being the bridge between the UX designers and the core developers.",
      id: 5
    },
    {
      title: "Used Figma to create interactive wireframes.",
      id: 6
    },
    {
      title: "Highly responsible for designing the dashboard in Figma and coding the User Interface for the Web part of the project using HTML5, CSS3, and JS framework.",
      id: 7
    },
    {
      title: "Designed and developed compelling PDPs that effectively communicate product features, benefits, and value propositions to customers using Figma.",
      id: 8
    },
    {
      title: "Conducted user research to understand customer needs and preferences and integrated those insights into PDP design.",
      id: 9
    },
    {
      title: "Collaborated with cross-functional teams, including product management, marketing, and engineering, to ensure accurate and up-to-date product information on PDPs.",
      id: 10
    },
    {
      title: "Conducted usability testing to identify areas for PDP improvement and iterated on PDP design based on user feedback.",
      id: 11
    },
    {
      title: "Using Figma improved PLP conversion rates by optimizing page layout, information hierarchy, and calls-to-action.",
      id: 12
    },
    {
      title: "Conducted A/B testing to identify the most effective PLP design and layout and iterated on PLP design based on test results.",
      id: 13
    },
    {
      title: "Developed and implemented PLP personalization strategies to provide customers with relevant product recommendations and increase sales.",
      id: 14
    },
    {
      title: "Created libraries using Figma with the styles and components according to the business requirement.",
      id: 15
    },
    {
      title: "Updated the existing internal libraries using Figma and created a master icon file in Library Modal.",
      id: 16
    },
    {
      title: "Mentored multiple teams, business leads, and developers about User Experience and Interaction design for all digital platforms, both for Mobile and Web.",
      id: 17
    },
    {
      title: "Responsible for making the Web page user friendly and responsive (RWD) for all the digital platforms, mostly involved with Bootstrap and CSS3 Media Queries.",
      id: 18
    },
    {
      title: "Have worked quiet in converting the design files into the HTML/CSS/JS coded pages while making sure the look and feel stays the same.",
      id: 19
    },
    {
      title: "Designed and elaborated various screens using HTML, CSS, JavaScript and JQuery for the Web and UX Center Walmart",
      id: 20
    },
  ]

  return (
    <section>
      <h2>Walmart</h2>
      <h5>UI/UX Designer</h5>
      <div className="container experience2__container">
        <div className="experience2__frontend">
          <h3>My Resonsibilites</h3>
          <div className="experience2__content">
            {
              walmartData.map((data) => (
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

export default Walmart