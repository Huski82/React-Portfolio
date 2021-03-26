import React from 'react';
import './styles.css';

function Card(props) {
  return (
    <div>
      <div className="card mb-3" style={{maxWidth: "800px"}}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={props.image} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.description}</p>
              <p className="card-text"><small className="text-muted">{props.technologies}</small></p>
              <p className="card-text"><small className="text-muted">{props.note}</small></p>
              <a href={props.tryLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">DEMO</a>
              <a href={props.repository} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Repository</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;