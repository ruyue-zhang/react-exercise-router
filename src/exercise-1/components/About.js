import React from 'react';
import {Link} from 'react-router-dom';

class About extends React.Component {
  render() {
    return (<div>
        <p>Company: ThoughtWorks Local</p>
        <p>Location: Xi'an</p>
        <p>For more information, please view our</p>
        <Link to="/" className="nav-link">website</Link>
     </div> 
    );
  }
}

export default About;

