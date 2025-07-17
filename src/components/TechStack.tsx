import "./styles/TechStack.css";

const TechStack = () => {
  return (
    <div className="tech-stack-section" id="tech-stack">
      <h3 className="title">Technical Skills</h3>
      <div className="skills-container">
        <div className="skill-category">
          <div className="skill-header">
            <div className="skill-icon">🔬</div>
            <h4>Pharmaceutical & Industrial Microbiology</h4>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">Quality Control</span>
            <span className="skill-tag">GLP Compliance</span>
            <span className="skill-tag">Media Preparation</span>
            <span className="skill-tag">Autoclave Operation</span>
            <span className="skill-tag">GPT & MLT</span>
            <span className="skill-tag">Environmental Monitoring</span>
            <span className="skill-tag">Aseptic Techniques</span>
          </div>
        </div>

        <div className="skill-category">
          <div className="skill-header">
            <div className="skill-icon">🧬</div>
            <h4>Biotechnology & Research</h4>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">Molecular Biology</span>
            <span className="skill-tag">Biochemical Techniques</span>
            <span className="skill-tag">Analytical Methods</span>
            <span className="skill-tag">Lab Protocols</span>
            <span className="skill-tag">Data Integrity</span>
            <span className="skill-tag">Equipment Maintenance</span>
          </div>
        </div>

        <div className="skill-category">
          <div className="skill-header">
            <div className="skill-icon">📊</div>
            <h4>Computational Biology</h4>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">Bioinformatics</span>
            <span className="skill-tag">Data Analysis</span>
            <span className="skill-tag">Computational Modeling</span>
            <span className="skill-tag">Research Methodologies</span>
            <span className="skill-tag">Trend Analysis</span>
          </div>
        </div>

        <div className="skill-category">
          <div className="skill-header">
            <div className="skill-icon">💻</div>
            <h4>Programming & Web Development</h4>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">Python</span>
            <span className="skill-tag">Java</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">HTML/CSS</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Git</span>
            <span className="skill-tag">Database Management</span>
          </div>
        </div>

        <div className="skill-category">
          <div className="skill-header">
            <div className="skill-icon">🏭</div>
            <h4>Laboratory & Quality Systems</h4>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">GMP Compliance</span>
            <span className="skill-tag">Cleanroom Protocols</span>
            <span className="skill-tag">pH Calibration</span>
            <span className="skill-tag">Water Sampling</span>
            <span className="skill-tag">Sterility Testing</span>
            <span className="skill-tag">Problem-solving</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
