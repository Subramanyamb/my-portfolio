import React from 'react';
import { Pagination } from 'swiper';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: '',
      name: 'Walmart, Bentonville, AR',
      role: 'UI/UX Designer',
      timeline: 'Aug 2022 - Present',
      test: 'My Responsibilities included understanding the business requirements, analyze and implement the technical solution designing the web pages and the components using different UX tools InVision, Sketch, Zeplin, Adobe XD, and Figma. I was involved in User Research and Usability testing for both Web and Mobile Design for the digital applications. I developed highly scalable RESTful services utilizing MongoDB aggregation pipeline processing, and AngularJS 2.0 front-end to handle 30,000 user load for Confidential Readiness Dashboard.',
      link: '/my-portfolio/walmart',
    },
    {
      id: 2,
      link: '',
      name: 'Confidential',
      role: 'UX Designer',
      timeline: 'Dec 2021 - July 2022',
      test: "I designed dynamic, cross-platform pages using HTML, CSS, JavaScript and with the addition of Bootstrap for a responsive menu navigation interface. I was responsible for designing, setting, communicating, and executing all user interface screens for each business requirement. I also designed highly usable user interface for applications using a combination of user centered design and agile development methods.",
      link: "/my-portfolio/jpmorganchase",
    },
    {
      id: 3,
      link: '',
      name: 'At&t, Dallas, TX',
      role: 'Web Designer',
      timeline: 'Mar 2021 - Nov 2021',
      test: 'I was involved in designing mock-ups for mobile web Application (iOS, Android) mostly using Sketch, Sketch and Adobe Creative Suite. I developed web presentation layer using HTML, CSS, JavaScript, ReactJS according to internal standards and guidelines. I used Axure to create wireframes for mobile-based applications before the development process.',
      link: "/my-portfolio/at-t",
    },
    {
      id: 4,
      link: '',
      name: 'IPRISM TECHNOLOGIES, HYD',
      role: 'UI Developer',
      timeline: 'Nov 2018 - Nov 2020',
      test: "I developed a web application by using Angular4 as front-end by using Web API to receive and pass data to back-end. I used Angular-CLI for initializing and for project setup with scaffolding features. I implemented Angular 4/2 component router for navigation, Angular 4/2 services to connect the web application to back-end APIs made use of ES6 features.",
      link: "/my-portfolio/iprism",
    },
    {
      id: 5,
      link: '',
      name: 'KTREE COMPUTER SOLUTIONS, HYD',
      role: 'Junior Web Developer',
      timeline: 'Aug 2015 - Oct 2018',
      test: "I developed the User Interactive web pages in a professional manner using web technologies like HTML, XHTML and CSS based on the W3C and ADA standards. Developed client-side validation code using JavaScript and jQuery. Designed dynamic client-side JavaScript, codes to build web forms and simulate process for web application, page navigation and form validation. I also [articipated in Code review and Quality Assurance. Automated the functionality and interface testing of the application using Quick Test Professional (QTP).",
      link: "/my-portfolio/ktree",
    },
  ];
  return (
    <section id="testmonials">
      {/* <h5>Feedback from my peers</h5> */}
      <h2>Professional Experience</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
            <h3 className='client__name'>{test.name}</h3>
            <h4 className='client__name'>{test.role}</h4>
            <h6 className='client__name'>{test.timeline}</h6>
            <small className="client__review">{test.test}</small>
            <button className='button_more'><Link to={test.link}>More Details</Link></button>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials
