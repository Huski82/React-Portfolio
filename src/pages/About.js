import React from 'react';
import { Link } from 'react-router-dom';
import christians from './../assets/images/christians.jpg';
import './../assets/styles/about.css';

function About() {
  return (
    <div>
      <div className="container">
       
        {/* Title */}
        <div className="row mb-5">
          <h1>Hello world, I'm Christian.</h1>
        </div>

        {/* Row to hold my picture and about me section */}
        <div className="row">
          
          {/* Column to hold my picture and icons */}
          <div className="col-lg-6">

            <img src={christians.jpeg} alt="christians.jpeg" className="w-100" />

            <p>Contact Me:</p>
            <div className="row">
              <a href="https://github.com/Huski82" target="_blank" rel="noopener noreferrer"><i className="fab fa-github icon"></i></a>
              <a href="https://www.linkedin.com/in/christian-suchoski-880118164/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin icon"></i></a>
              <a href="mailto:webmaster@christiansuchoski@gmail.com"><i className="fas fa-envelope icon"></i></a>
            </div>
            
          </div>

          {/* Column for About Me */}
          <div className="col-lg-6">
            <p className="aboutText">
            I consider my self a "Jack Of All Trades" I've been in various industries. Mostly in Healthcare and eventually moving into sales for combined 10 + years.
            </p>
      
            <p className="aboutText">
            My Energetic, self-motivated professional vibe gives me the ability to build credible relationships across multiple functions using effective techniques and to contributing directly to company growth and efficiency.

            I'm extremely detail-oriented and have always been fascinated with "All Things Tech"
            </p>

            <p className="aboutText">
            I was previously a MRI Technologist for 6 + years who quickly moved up the ranks and started to managed an MRI Facility. Experienced in marketing, business development and complex negotiations with C-Level Executives. I made a pivotal move to a VC Equity firm here
            in Silicon Valley. But,now once again have made a shift in my career into becoming a Full Stack Web Developer.

            I have always had a love for coding and never took the opportunity. I seized the moment and here I am!
            </p>

            <p className="aboutText">
            Here's my <Link to="/portfolio" >portfolio</Link>!
            </p>

            <p className="aboutText">
            I'm experienced in:
              <ul>
                <li>Browser-based Technologies:  HTML5, CSS, JavaScript, jQuery, Bootstrap, and React.js</li>
                <li>Server-side Technologies:  Node.js and Express.js</li>
                <li>Databases:  MongoDB, Mongoose and MySql</li>
                <li>API Interaction:  API, JSON, and AJAX</li>
                <li>Deployment:  Git, GitHub Pages, and Heroku</li>
                <li>Other:  Command Line, User Authentication</li>
              </ul>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default About;
