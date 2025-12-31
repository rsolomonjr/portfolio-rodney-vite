import "./App.css";
import { useEffect, useState } from "react";
import './hamburger-fixes.css';


import infosite from "./assets/infosite.jpeg";
import creamofthecrop from "./assets/creamofthecrop.jpeg";
import longchamp from "./assets/longchamp.jpeg";
import lighthouse from "./assets/light-house-haiit.png";
import healingharm from "./assets/healingharm.png";
import yolanda from "./assets/yolanda-solomon-site.png";
import starter_tool from "./assets/infosite-starter-tool.png";
import rodneyheadshot from "./assets/rodney.jpg";
import adtech from "./assets/adtech.png";

import cv from "./assets/pdf/Rodney_Solomon.pdf";

import { Email } from "react-obfuscate-email";

const App = () => {
  const [shouldFadeOut, setShouldFadeOut] = useState(false);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  // Handle menu item click - close menu after 1 second
  const handleMenuItemClick = () => {
    const navbarCollapse = document.getElementById('navbarNavAltMarkup');
    const bsCollapse = window.bootstrap?.Collapse?.getInstance(navbarCollapse);

    if (bsCollapse) {
      setTimeout(() => {
        bsCollapse.hide();
      }, 1000);
    }
  };

  // Handle navbar fade-out immediately when hamburger menu is expanded
  useEffect(() => {
    const navbarCollapse = document.getElementById('navbarNavAltMarkup');

    const handleShow = () => {
      // Fade out icons immediately when menu opens
      setShouldFadeOut(true);
    };

    const handleHide = () => {
      // Reset fade-out when menu closes
      setShouldFadeOut(false);
    };

    if (navbarCollapse) {
      navbarCollapse.addEventListener('shown.bs.collapse', handleShow);
      navbarCollapse.addEventListener('hidden.bs.collapse', handleHide);
    }

    // Cleanup
    return () => {
      if (navbarCollapse) {
        navbarCollapse.removeEventListener('shown.bs.collapse', handleShow);
        navbarCollapse.removeEventListener('hidden.bs.collapse', handleHide);
      }
    };
  }, []);

  const skillCategories = {
    'Frontend Development': [
      'React', 'JavaScript (ES6+)', 'HTML5', 'CSS3',
      'JSP', 'jQuery', 'Bootstrap', 'Responsive Design'
    ],
    'Tools & Platforms': [
      'Git', 'JIRA', 'Jenkins', 'SharePoint CI/CD',
      'Visual Studio Code', 'Vite', 'REST APIs'
    ],
    'Design Tools': [
      'Figma', 'Sketch', 'Adobe XD'
    ],
    'CMS & E-Commerce': [
      'WordPress', 'Joomla', 'Magento',
      'WooCommerce', 'PayPal Integration'
    ],
    'AI-Assisted Development': [
      'GitHub Copilot', 'Claude AI', 'AI-Powered Solutions'
    ],
    'Methodologies': [
      'Agile', 'Waterfall', 'DevOps', 'Code Reviews',
      'Team Leadership', 'Mentoring'
    ]
  };

  return (
    <>
      <main className="pb-5">
        <nav className="navbar navbar-expand-lg bg-body-tertiary bd-navbar sticky-top">
          <div className="container-fluid">
            <a className="navbar-brand" onClick={scrollToTop}>
              RS
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/#projects"
                  onClick={handleMenuItemClick}
                >
                  Projects
                </a>
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/#experience"
                  onClick={handleMenuItemClick}
                >
                  Experience
                </a>
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/#awards"
                  onClick={handleMenuItemClick}
                >
                  Awards
                </a>
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/#skills"
                  onClick={handleMenuItemClick}
                >
                  Skills
                </a>
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/#linkedin"
                  onClick={handleMenuItemClick}
                >
                  Blog
                </a>
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/#contact"
                  onClick={handleMenuItemClick}
                >
                  Contact
                </a>
                <a href={cv} target="_blank" rel="noreferrer" className="nav-link" onClick={handleMenuItemClick}>
                <span>R&#233;sum&#233;</span>
                </a>
              </div>
            </div>
          </div>
          <ul className={`navbar-nav flex-row flex-wrap ms-md-auto me-3 ${shouldFadeOut ? 'fade-out' : ''}`}>
            <li className="nav-item col-lg-auto">
              <a
                href="https://github.com/rsolomonjr"
                target="_blank"
                rel="noreferrer"
                className="nav-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>
            </li>
            <li className="nav-item col-lg-auto">
              <a
                href="https://www.linkedin.com/in/rodneysolomonjr/"
                target="_blank"
                rel="noreferrer"
                className="nav-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
                </svg>
              </a>
            </li>
            <li className="nav-item col-lg-auto">
              <a
                href="https://www.fiverr.com/s/42wmz0k"
                target="_blank"
                rel="noreferrer"
                className="nav-link"
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 89 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="currentColor">
                    <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
                  </g>
                  <g fill="#1dbf73">
                    <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
        {/* About Me */}

        <div className="row justify-content-center mt-3 mb-0">
          <div className="row d-flex justify-content-around align-items-center">
            <div className="headshot w-25">
              <img
                src={rodneyheadshot}
                className="img-fluid img-thumbnail rounded-circle"
              />
            </div>
            <div className="headshot-copy col-lg-6">
              <h3>About Me</h3>
              <p>Sr. Manager, B2B Web Developer with 11+ years of experience in frontend development, DevOps, and team leadership. Currently at <strong>Dow Jones</strong>, where I received the <strong>2025 Global Impact & Operational Excellence Award</strong>. I specialize in transforming wireframes into responsive applications using HTML5, CSS3, and JavaScript frameworks, with expertise in agile and DevOps practices.</p>

              <p>My innovative solutions speak for themselves: at Medscape (WebMD), I reduced application build time from five hours to ten minutes, earning the <strong>2023 Top Innovator Award</strong>. I've constructed and refined 30-40+ user interface applications monthly using React, JavaScript, and modern development tools, while leading teams of developers and mentoring international counterparts.</p>

              <p>I leverage AI-powered tools like <strong>GitHub Copilot and Claude</strong> to create efficient web engineering solutions, staying at the forefront of modern development practices. My experience spans from building high-traffic B2B platforms at Dow Jones, to CMS systems at Verisk Analytics (600,000 monthly visitors), to e-commerce solutions across WordPress, Joomla, and Magento.</p>

              <p>As a contributor to <strong>FrontendNation2025</strong>, my dedication to web development reflects my professional ethos: driving innovation, leading cross-functional teams, and sharing knowledge to elevate the entire tech industry.</p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div id="projects" className="mt-0">
          &nbsp;
        </div>
        <h1 className="text-center">Projects</h1>
        <div className="row">          
          <div className="col-sm-5">
            <div className="card">
              <a
                href="https://github.com/rsolomonjr/fin-dashboard"
                target="_blank"
                rel="noreferrer"
              >
                <img src={adtech} />
              </a>
              <div className="card-body">
                <h5 className="card-title">Ad Tech Demo</h5>
                <p className="card-text">
                  Ad Tech News, self-directed development with React, Next, and MaterialUI. 
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="card">
              <a
                href="https://www.medscape.com/infosites/294239.3/public/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={infosite} />
              </a>
              <div className="card-body">
                <h5 className="card-title">Medscape</h5>
                <p className="card-text">
                  Microsite built with HTML, CSS, JSON.
                </p>
              </div>
            </div>
          </div>          
        </div>
        <div className="row">
          <div className="col-sm-5">
            <div className="card">
              <a
                href="https://github.com/rsolomonjr/infosite-starter-kit"
                target="_blank"
                rel="noreferrer"
              >
                <img src={starter_tool} alt="" />
              </a>
              <div className="card-body">
                <h5 className="card-title">Infosite Starter Tool</h5>
                <p className="card-text">
                  JSON Package Builder made with jQuery, JavaScript, HTML, CSS.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="card">
              <a
                href="https://www.thelighthousehaiti.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={lighthouse} alt="" />
              </a>
              <div className="card-body">
                <h5 className="card-title">Light House Haiti</h5>
                <p className="card-text">
                  Developer Mode Squarespace site with custom CSS and graphic
                  design.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">          
          <div className="col-sm-5">
            <div className="card">
              <a
                href="https://www.healingharm.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={healingharm} alt="" />
              </a>
              <div className="card-body">
                <h5 className="card-title">Healing Harm</h5>
                <p className="card-text">
                  Developer Mode Squarespace site with custom CSS and graphic
                  design.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="card">
              <img src={creamofthecrop} alt="" />
              <div className="card-body">
                <h5 className="card-title">C.R.E.A.M of the Crop, Maryland</h5>
                <p className="card-text">Wordpress site.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">          
          <div className="col-sm-5">
            <div className="card">
              <img src={longchamp} alt="" />
              <div className="card-body">
                <h5 className="card-title">Longchamp Charities</h5>
                <p className="card-text">Wordpress site.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div id="experience" className="mt-5">
          &nbsp;
        </div>
        <h1 className="text-center mb-4">Work Experience</h1>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div>
                    <h5 className="card-title mb-1">Sr. Manager, B2B Web Developer</h5>
                    <h6 className="text-muted">Dow Jones</h6>
                  </div>
                  <span className="badge bg-primary">Dec 2024 - Present</span>
                </div>
                <ul className="mb-2">
                  <li>Recipient of the 2025 Global Impact & Operational Excellence Award</li>
                  <li>Lead B2B web development initiatives for enterprise-level clients</li>
                  <li>Manage cross-functional teams and drive innovation in web technologies</li>
                </ul>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div>
                    <h5 className="card-title mb-1">Frontend Engineer</h5>
                    <h6 className="text-muted">Medscape / WebMD</h6>
                  </div>
                  <span className="badge bg-primary">May 2018 - Dec 2024</span>
                </div>
                <ul className="mb-2">
                  <li>Winner of 2023 Top Innovator Award for reducing build time from 5 hours to 10 minutes</li>
                  <li>Constructed and refined 30-40 user interface applications monthly using React, JavaScript, and JSP</li>
                  <li>Led and mentored team of 8 developers, conducting code reviews and QA oversight</li>
                  <li>Architected ES6 JavaScript toolkit and optimized SharePoint CI/CD processes</li>
                </ul>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div>
                    <h5 className="card-title mb-1">DevOps Engineer</h5>
                    <h6 className="text-muted">Verisk Analytics</h6>
                  </div>
                  <span className="badge bg-primary">Aug 2016 - Jan 2018</span>
                </div>
                <ul className="mb-2">
                  <li>Optimized performance of 9 high-traffic websites, including flagship site with 600K monthly visitors</li>
                  <li>Managed test, staging, and production processes using JIRA for WordPress, Joomla, and HTML5 sites</li>
                  <li>Developed application architectural diagrams using Microsoft Visio</li>
                </ul>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div>
                    <h5 className="card-title mb-1">Frontend Developer</h5>
                    <h6 className="text-muted">Zerve</h6>
                  </div>
                  <span className="badge bg-primary">Jun 2013 - Mar 2016</span>
                </div>
                <ul className="mb-2">
                  <li>Developed e-commerce solutions across WordPress, Joomla, and Magento platforms</li>
                  <li>Customized WooCommerce and PayPal integrations for enhanced user experience</li>
                  <li>Generated minimum $5K monthly revenue through integration of 20-25 sites</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Awards & Education */}
        <div id="awards" className="mt-5">
          &nbsp;
        </div>
        <h1 className="text-center mb-4">Awards & Education</h1>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">🏆 Awards & Certifications</h5>
                    <ul>
                      <li><strong>2025 Global Impact & Operational Excellence Award</strong> - Dow Jones</li>
                      <li><strong>2023 Top Innovator Award</strong> - WebMD</li>
                      <li><strong>Outstanding Performance in Computer Science</strong> - Morehouse College</li>
                      <li><strong>FrontendNation2025</strong> - Contributor</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">🎓 Education</h5>
                    <h6 className="mb-2"><strong>Morehouse College</strong></h6>
                    <p className="mb-1">Bachelor of Science, Computer Science</p>
                    <p className="text-muted mb-0">Atlanta, GA | Graduated June 2003</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills*/}
        <div id="skills">&nbsp;</div>
        <h1 className="text-center">Skills & Expertise</h1>
        {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
          <div key={categoryIndex} className="mb-4">
            <h3 className="text-center mb-3" style={{fontSize: '1.5rem', fontWeight: '600'}}>{category}</h3>
            <div className="row row-cols-2 row-cols-md-4 g-3">
              {skills.map((skill, skillIndex) => (
                <div className="col" key={skillIndex}>
                  <div className="card h-100 text-center">
                    <div className="card-body">
                      <h6 className="card-title mb-0">{skill}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* From LinkedIn */}
        <div id="linkedin" className="mt-5">
          &nbsp;
        </div>
        <h1 className="text-center mb-4">From LinkedIn</h1>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="sk-ww-linkedin-profile-post" data-embed-id="25633051"></div>
          </div>
        </div>

        {/* Contact Me */}
        <div id="contact"></div>
        <div className="mt-5 d-flex justify-content-center">
        <Email email="contact@rodneysolomonjr.net" className="mx-auto"  headers={{cc: 'profession3x@yahoo.com',subject: 'Contact from Portfolio Site'}}>
            <button type="button" className="btn btn-light btn-lg">
              Contact Me
            </button>
          </Email>
        </div>
      </main>
    </>
  );
};

export default App;
