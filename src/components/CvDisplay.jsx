import "../styles/CvDisplay.css";

export default function Display({ submittedData }) {
  return (
    <div className="cv">
      {submittedData && (
        <div className="data">
          <div className="name">
            <h1 className="header">{submittedData.name}</h1>
            <div className="contact">
              <span className="email">{submittedData.email}</span>
              <span className="phone">
                ({submittedData.phone.slice(0, 3)})-
                {submittedData.phone.slice(3, 6)}-
                {submittedData.phone.slice(6, 10)}
              </span>
            </div>
          </div>

          {submittedData.school && (
            <div className="education">
              <h2 className="header subhead">Education</h2>
              <div className="line"></div>
              <div>
                <span className="school">{submittedData.school}, </span>
                <span className="degree">{submittedData.degree}</span>
              </div>
              <div className="dates-display">
                <span>
                  From: <b>{submittedData.schoolDateStart}</b>
                </span>
                <span>
                  To: <b>{submittedData.schoolDateEnd}</b>
                </span>
              </div>
            </div>
          )}

          {submittedData.company && (
            <div className="experience">
              <h2 className="header subhead">Experience</h2>
              <div className="line"></div>
              <div>
                <span className="company">{submittedData.company}, </span>
                <span className="position">{submittedData.position}</span>
              </div>
              <div className="dates-display">
                <span>
                  From: <b>{submittedData.workDateStart}</b>
                </span>
                <span>
                  To: <b>{submittedData.workDateEnd}</b>
                </span>
              </div>
              <br></br>
              <span className="description-header">Responsibilities:</span>
              <span className="job-description">
                {submittedData.responsibilities}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
