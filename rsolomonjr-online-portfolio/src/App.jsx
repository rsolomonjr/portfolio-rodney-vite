import "./App.css";

import infosite from "./assets/infosite.jpeg";
import creamofthecrop from "./assets/creamofthecrop.jpeg";
import brandplay from "./assets/brandplay.jpeg";
import longchamp from "./assets/longchamp.jpeg";
import lighthouse from "./assets/light-house-haiit.png";
import healingharm from "./assets/healingharm.png";
import yolanda from "./assets/yolanda-solomon-site.png";
import starter_tool from "./assets/infosite-starter-tool.png";
import rodneyheadshot from "./assets/rodney.jpg";

import Obfuscate from 'react-obfuscate';

import { useEffect, useState } from "react";


const App = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };  

  return (
    <>
      <main className="pb-5">
        <nav className="navbar navbar-expand-lg bg-body-tertiary bd-navbar sticky-top">
          <div className="container-fluid">
            <a className="navbar-brand">
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
              <div className="navbar-nav">
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
                  href="/#contact"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          <ul className="navbar-nav flex-row flex-wrap ms-md-auto me-3">
            <li className="nav-item col-lg-4">
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
            <li className="nav-item col-lg-4">
              <a
                href="https://twitter.com/rodneysolomonjr"
                target="_blank"
                rel="noreferrer"
                className="nav-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                </svg>
              </a>
            </li>
            <li className="nav-item col-lg-4">
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

        <div className="row justify-content-center mt-3 mb-3">
          <div className="col-lg-8 d-flex justify-content-around align-items-center">
            <div className="headshot w-25">
              <img
                src={rodneyheadshot}
                className="img-fluid img-thumbnail rounded-circle"
              />
            </div>
            <div className="headshot-copy col-lg-6">
              <h2>About Me</h2>
              <p>
                I am a front end developer with ten years of experience in
                various industries. Having advanced to a Lead/SME, I am seeking
                full-time front end roles with the objective of advancing to a
                full-stack engineer.
              </p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div id="projects" className="mb-2">&nbsp;</div>
        <div className="row">
          <h1 className="mt-0">Projects</h1>
          <div className="col-sm-6">
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
          <div className="col-sm-6">
            <div className="card">
              <a
                href="https://www.medscape.com/brandplay/389298.3/public"
                target="_blank"
                rel="noreferrer"
              >
                <img src={brandplay} alt="" />
              </a>
              <div className="card-body">
                <h5 className="card-title">Medscape</h5>
                <p className="card-text">
                  Video site built with HTML, CSS, JSON, jQuery.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
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
          <div className="col-sm-6">
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
          <div className="col-sm-6">
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
          <div className="col-sm-6">
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
          <div className="col-sm-6">
            <div className="card">
              <img src={creamofthecrop} alt="" />
              <div className="card-body">
                <h5 className="card-title">C.R.E.A.M of the Crop, Maryland</h5>
                <p className="card-text">Wordpress site.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <img src={longchamp} alt="" />
              <div className="card-body">
                <h5 className="card-title">Longchamp Charities</h5>
                <p className="card-text">Wordpress site.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Me */}
        <div id="contact"></div>
        <div className="mt-5 d-flex justify-content-center">
        <Obfuscate email="contact@rodneysolomonjr.net" className="mx-auto"  headers={{cc: 'profession3x@yahoo.com',subject: 'Contact from Portfolio Site'}}>
            <button type="button" className="btn btn-info btn-lg">
              Contact Me
            </button>
          </Obfuscate>
        </div>
      </main>

      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          Back to Top &#8679;
        </button>
      )}
    </>
  );
};

export default App;
