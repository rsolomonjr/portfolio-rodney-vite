import infosite from "../assets/infosite.jpeg";
import creamofthecrop from "../assets/creamofthecrop.jpeg";
import longchamp from "../assets/longchamp.jpeg";
import lighthouse from "../assets/light-house-haiit.png";
import healingharm from "../assets/healingharm.png";
import starter_tool from "../assets/infosite-starter-tool.png";
import rodneyheadshot from "../assets/rodney.jpg";
import adtech from "../assets/adtech.png";
import { Email } from "react-obfuscate-email";

const Home = () => {
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
                <span className="badge bg-primary">2018 - Present</span>
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
                <span className="badge bg-primary">2018 - Recent</span>
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
                <span className="badge bg-primary">2016 - 2018</span>
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
                <span className="badge bg-primary">2013 - 2016</span>
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

      {/* Contact Me */}
      <div id="contact"></div>
      <div className="mt-5 d-flex justify-content-center">
        <Email email="contact@rodneysolomonjr.net" className="mx-auto" headers={{cc: 'profession3x@yahoo.com',subject: 'Contact from Portfolio Site'}}>
          <button type="button" className="btn btn-light btn-lg">
            Contact Me
          </button>
        </Email>
      </div>
    </>
  );
};

export default Home;
