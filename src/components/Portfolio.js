
import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">My Portfolio</h2>
        <div className="row">
          {[1, 2, 3].map((item) => (
            <div key={item} className="col-md-4 mb-4">
              <div className="card">
                <img src="https://via.placeholder.com/400x300" className="card-img-top" alt={`Project ${item}`} />
                <div className="card-body">
                  <h5 className="card-title">Project Title {item}</h5>
                  <p className="card-text">Short description of the project.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
