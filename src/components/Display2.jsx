import "../styles/insert.css";

export default function Display2({ submittedData, isActive}) {
  return (
    <div>
      {submittedData && isActive && (
        <div className="display2">
            <h2>Display 2</h2>
          <span>{submittedData.name}</span>
          <span>{submittedData.email}</span>
          <span>{submittedData.phone}</span>
          <span>{submittedData.school}</span>
          <span>{submittedData.degree}</span>
          <span>{submittedData.schoolDateStart}</span>
          <span>{submittedData.schoolDateEnd}</span>
          <span>{submittedData.company}</span>
          <span>{submittedData.position}</span>
          <span>{submittedData.workDateStart}</span>
          <span>{submittedData.workDateEnd}</span>
          <span>{submittedData.responsibilities}</span>
        </div>
      )}
    </div>
  );
}
