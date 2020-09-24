import React from 'react';

class About extends React.Component {
  render() {
    return (<div>
        <p>Company: ThoughtWorks Local</p>
        <p>Location: Xi'an</p>
        <p>For more information, please view our</p>
        <a href={"/"} className="nav-link">website</a>
     </div> 
    );
  }
}

export default About;

