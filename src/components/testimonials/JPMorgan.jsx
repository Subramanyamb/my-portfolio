import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience2.css';

const JPMorgan = () => {
  const jpmorganData = [
    {
      title: "Designed dynamic, cross-platform pages using HTML, CSS, JavaScript and with the addition of Bootstrap for a responsive menu navigation interface.",
      id: 1
    },
    {
      title: "Design highly usable user interface for applications using a combination of user centered design and agile development methods.",
      id: 2
    },
    {
      title: "Directs the overall user experience of interacting with the product being delivered.",
      id: 3
    },
    {
      title: "Responsible for designing, setting, communicating, and executing all user interface screens for each business requirement using Figma.",
      id: 4
    },
    {
      title: "Design both low-fidelity and high-fidelity prototypes using Figma, Axure and Sketch.",
      id: 5
    },
    {
      title: "Provide expertise to the project team through applicable design patterns, screen layout decisions, and usability testing.",
      id: 6
    },
    {
      title: "Examine and analyze current user(s) flow and process, pain points and desires from a usability and visual standpoint to deliver proper solutions.",
      id: 7
    },
    {
      title: "Work very closely with the business analyst, technical lead, and developers to develop the system information architecture and responsive designs for the user interface during each sprint.",
      id: 8
    },
    {
      title: "Updated the existing internal libraries using Figma and created a master icon file in Library Modal.",
      id: 9
    },
    {
      title: "Design the information architecture, user interface and user interactions for systems using Figma.",
      id: 10
    },
    {
      title: "Review business and technical requirements as well as interviewing business users as required to understand their work processes and personal needs.",
      id: 11
    },
    {
      title: "Redesigned the web pages using Figma and updated using HTML5, CSS3, JavaScript, JQuery and Bootstrap.",
      id: 12
    },
    {
      title: "Plan and execute other forms of usability evaluations including informal and formal usability tests.",
      id: 13
    },
    {
      title: "Present data in graphical formats using data visualization best practices.",
      id: 14
    },
    {
      title: "Create storyboards to strengthen the user experience elements across web and mobile platforms.",
      id: 15
    },
    {
      title: "Perform multi-platform usability testing for desktop, tablet, and mobile screens.",
      id: 16
    },
    {
      title: "Design intuitive and responsive web wireframes optimized for mobile, tablet and desktop.",
      id: 17
    },
    {
      title: "Use current best practices and tools such as user profiles and personas; prototyping; heuristic reviews, storyboards, process flows, user flows, and site maps and usability reviews of developed screens.",
      id: 18
    },
    {
      title: "Apply the American Disability Act (ADA) Web Accessibility Standards to the web applications.",
      id: 19
    },
  ]

  return (
    <section>
      <h2>JP Morgan Chase</h2>
      <h5>UX Designer</h5>
      <div className="container experience2__container">
        <div className="experience2__frontend">
          <h3>My Resonsibilites</h3>
          <div className="experience2__content">
            {
              jpmorganData.map((data) => (
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

export default JPMorgan