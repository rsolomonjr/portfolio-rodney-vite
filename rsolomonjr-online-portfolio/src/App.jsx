import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Rodney Solomon</h1>
      <nav className="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          RS
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarPortfolio">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a href="#" className="nav-link">
                Projects
              </a>
            </li>
            <li className="nav-item active">
              <a href="#" className="nav-link">
                Recommendations
              </a>
            </li>
            <li className="nav-item active">
              <a href="#" className="nav-link">
                Blog
              </a>
            </li>
            <li className="nav-item active">
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default App;
