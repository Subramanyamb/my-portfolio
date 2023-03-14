import React from "react";

import "./portfolio.css";
//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: " University of Missouri – Kansas City, USA (2022)",
      description: "Master's in Computer Science ",
    },
    {
      id: 2,
      title: "Lakireddy Bali Reddy College of Engineering, India (2013)",
      description: "Bachelor's in Computer Science Engineering",
    },
  ];

  return (
    <section id="portfolio">
      {/* <h5>My Recent </h5> */}
      <h2>Education</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              {/* <p>{pro.technologies}</p> */}
            </div>
            {/* <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div> */}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
