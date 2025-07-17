import "./styles/Work.css";

const Work = () => {
  return (
    <div className="work-section" id="work">
      <h3 className="title">Extracurricular Activities & Leadership</h3>
      <div className="work-content">
        <div className="activity">
          <h4>Co-Secretary</h4>
          <p className="organization">Dream Merchants VIT</p>
          <p className="duration">May 2025 – Present | Vellore, India</p>
          <p className="description">Leading organizational activities and coordinating events as Co-Secretary, previously served as Core Committee Member since August 2024</p>
        </div>
        <div className="activity">
          <h4>Industrial Internship</h4>
          <p className="organization">Alkem Laboratories Ltd.</p>
          <p className="duration">May 2025 – June 2025 | Sikkim, India</p>
          <p className="description">Worked in Quality Control Microbiology Lab, trained in pharmaceutical microbiology practices, media preparation, autoclave operation, and microbiological testing following GLP standards</p>
        </div>
        <div className="activity">
          <h4>Student Coordinator</h4>
          <p className="organization">VIT BioSummit 11th Edition</p>
          <p className="duration">October 2024 – Present | Vellore, India</p>
          <p className="description">Coordinated major biotechnology summit, managing logistics, speaker sessions, and student engagement activities</p>
        </div>
        <div className="activity">
          <h4>Events Volunteer</h4>
          <p className="organization">graVITas VIT Vellore</p>
          <p className="duration">September 2024 – Present | Vellore, India</p>
          <p className="description">Supporting event organization and management for VIT's annual technical festival</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
