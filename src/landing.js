import React from 'react';
import './css/styles.css';
import { Link } from "react-scroll";

function Landing() {
  return (
    <div className="landing">
        <div className="title">
            <h1>Ashley Beard</h1>
            <p>Web Developer</p>
        </div>

        <div className="arrow">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {200}
            >Scroll for more</Link>
        </div>
    </div>
  );
}

export default Landing;
