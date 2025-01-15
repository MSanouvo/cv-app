import "../styles/insert.css"

export default function Display({submittedData, isActive}) {
    return (
        <div>
          {submittedData && isActive && (
            <div className="data">
              <h2>Display 1</h2>
            <span>
              Name: {submittedData.name}, Email: {submittedData.email}, Phone:{" "}
              {submittedData.phone}
            </span>

            <span>
              School: {submittedData.school}, Degree: {submittedData.degree},
              Start: {submittedData.schoolDateStart}, End:{" "}
              {submittedData.schoolDateEnd}
            </span>

            <span>
              Company: {submittedData.company}, Position:{" "}
              {submittedData.position}, Start: {submittedData.workDateStart},
              End: {submittedData.workDateEnd}, Responsibilities:{" "}
              {submittedData.responsibilities}
            </span>
          </div>
          )}
      </div>
    )
}