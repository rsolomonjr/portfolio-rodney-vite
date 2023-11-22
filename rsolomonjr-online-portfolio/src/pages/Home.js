import react from 'react';

const Home = () => {
  return (
    <div className="row">
    <h1>Projects</h1>

    <div className="col-sm-6">
      <div className="card">
        <a
          href="https://www.medscape.com/infosites/294239.3/public/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={infosite} alt="" />
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
            Video site built with HTML, CSS, JSON.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Home;