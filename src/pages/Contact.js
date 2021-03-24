import React from 'react';
import '';

function Contact() {
  return (
    <div>
     <div className="container">
       <h1>Contact Me</h1>
       <p>
         <a href="mailto:webmaster@christiansuchoski@gmail.com">
           <i className="fas fa-envelope icon">christiansuchoski@gmail.com</i>
          </a>
       </p>

       <p>
         <a href="https://www.linkedin.com/in/christian-suchoski-880118164/" target="_blank" rel="noopener noreferrer">
           <i className="fab fa-linkedin icon"> LinkedIn</i>
         </a>
       </p>

       <p>
         <a href="https://github.com/Huski82" target="_blank" rel="noopener noreferrer">
           <i className="fab fa-github icon"> GitHub</i>
         </a>
       </p>
     </div>
    </div>
    
  );  
}

export default Contact;
