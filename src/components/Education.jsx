import "../styles/insert.css"

export default function Education({formData, handleChange}) {
    return (
        <div>
            <h2 className="header">Insert Info</h2>
            <lable htmlFor="name">
              School:
              <input
                type="text"
                name="school"
                value={formData.school}
                onChange={handleChange}
              />
            </lable>
    
            <lable>
              Degree:
              <input
                type="text"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
              />
            </lable>
    
            <lable>
              Start Date:
              <input
                type="date"
                name="schoolDateStart"
                value={formData.schoolDateStart}
                onChange={handleChange}
              />
            </lable>

            <lable>
              End Date:
              <input
                type="date"
                name="schoolDateEnd"
                value={formData.schoolDateEnd}
                onChange={handleChange}
              />
            </lable>
        </div>
      );
}