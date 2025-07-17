import { FaDna, FaMicroscope } from "react-icons/fa";
import { GiMolecule } from "react-icons/gi";
import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <div className="about-header">
          <h3 className="title">About Me</h3>
          <div className="bio-icons">
            <FaDna className="bio-icon" />
            <GiMolecule className="bio-icon" />
            <FaMicroscope className="bio-icon" />
          </div>
        </div>
        <p className="para">
          I'm a Biotechnology student at VIT with a passion for blending science,
          technology, and innovation. As Co-Secretary of Dream Merchants VIT and
          an intern at Alkem Laboratories, I've gained hands-on experience in
          pharmaceutical testing and Quality Control Microbiology.
        </p>
        <p className="para">
          I'm driven to bridge traditional biological research with modern
          computational approaches, applying bioinformatics and web technologies
          to advance healthcare solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
