import "./App.css";

import infosite from "./assets/infosite.jpeg";
import creamofthecrop from "./assets/creamofthecrop.jpeg";
import longchamp from "./assets/longchamp.jpeg";
import lighthouse from "./assets/light-house-haiit.png";
import healingharm from "./assets/healingharm.png";
import yolanda from "./assets/yolanda-solomon-site.png";
import starter_tool from "./assets/infosite-starter-tool.png";
import rodneyheadshot from "./assets/rodney.jpg";
import adtech from "./assets/adtech.png";

import cv from "./assets/pdf/Rodney Solomon - Software Engineer - Resume.pdf";

import { Email } from "react-obfuscate-email";

const App = () => {

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };  

  const technologies = [
    'React', 'JavaScript', 'jQuery',
    'HTML', 'CSS', 'Git',
    'JSON', 'JSP', 'Slick.js',
    'JIRA', 'Microsoft Visio', 'WordPress',
    'Joomla', 'Magento', 'Bootstrap',
    'WooCommerce', 'PayPal', 'Jenkins',
    'Figma', 'Visual Studio Code', 'Sketch'
  ];

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
                >
                  Projects
                </a>
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/#skills" 
                >
                  Skills
                </a>
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/#contact"
                >
                  Contact Me
                </a>
                <a href={cv} target="_blank" rel="noreferrer" className="nav-link">
                <span>R&#233;sum&#233;</span>
                </a>
              </div>
            </div>
          </div>
          <ul className="navbar-nav flex-row flex-wrap ms-md-auto me-3">
            <li className="nav-item col-lg-5">
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
            <li className="nav-item col-lg-5">
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
              <p>At Medscape, my innovative solutions, such as significantly reducing application build time from five hours to ten minutes, earned the 2023 Top Innovator Award. This recognition underscores my commitment to enhancing efficiency and productivity within our development team. Utilizing my expertise in HTML5, CSS3, and JavaScript, I have streamlined processes, which has been tremendously beneficial for both junior developers and the quality assurance team.</p><p>My role as Product Lead has allowed me to train and support developers across multiple projects, including microsites, ads, and polling applications. I have also been instrumental in collaborating with the CSD and Template Delivery teams to optimize our products for reuse, ensuring consistent quality and performance. My dedication to web development and team enablement at Medscape reflects my professional ethos: to drive innovation and knowledge sharing within the tech industry.</p>           
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
                href="https://rsolomonjr.dev/starter.html"
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
                href="https://yolandasolomon.site"
                target="_blank"
                rel="noreferrer"
              >
                <img src={yolanda} alt="" />
              </a>
              <div className="card-body">
                <h5 className="card-title">Yolanda Solomon</h5>
                <p className="card-text">WordPress site.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
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
        </div>
        <div className="row">
          <div className="col-sm-5">
            <div className="card">
              <img src={creamofthecrop} alt="" />
              <div className="card-body">
                <h5 className="card-title">C.R.E.A.M of the Crop, Maryland</h5>
                <p className="card-text">Wordpress site.</p>
              </div>
            </div>
          </div>
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
        {/* Skills*/}
        <div id="skills">&nbsp;</div>
        <h1 className="text-center">Skills</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
      {technologies.map((tech, index) => (
        <div className="col" key={index}>
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{tech}</h5>
            </div>
          </div>
        </div>
      ))}
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
