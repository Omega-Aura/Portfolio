import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section" id="career">
      <h3 className="title">Education & Certifications</h3>
      <div className="career-content">
        <div className="education">
          <h4>B.Tech in Biotechnology (Pre-Final Year)</h4>
          <p className="institution">Vellore Institute of Technology (VIT)</p>
          <p className="details">Current CGPA: 8.15 | 2023 – 2027 | Vellore, India</p>
          <p className="description">Specializing in molecular biology, bioinformatics, pharmaceutical microbiology, and industrial applications</p>
        </div>
        <div className="certificates">
          <h4>Certifications & Achievements</h4>
          <div className="cert-item">
            <p><strong>The Web Developer Boot Camp</strong></p>
            <p>Udemy | March 2025</p>
            <p>Credential ID: UC-81f8f547-1c85-41e7-b27d-5d6893cb6497</p>
          </div>
          <div className="cert-item">
            <p><strong>NPTEL: Forests and their Management</strong></p>
            <p>Score: 84% | January - April 2024</p>
          </div>
          <div className="cert-item">
            <p><strong>Industrial Internship Certificate</strong></p>
            <p>Alkem Laboratories Ltd. | May - June 2025</p>
            <p>Quality Control Microbiology Lab specialization</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
