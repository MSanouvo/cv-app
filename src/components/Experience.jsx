import "../styles/insert.css"

export default function Experience({formData, handleChange}) {
    return (
        <div className="section">
            <h2 className="header">Experience</h2>
            <label className="input">
              Company:
              <input
                className="input_field"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </label>
    
            <label className="input">
              Position:
              <input
                className="input_field"
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
              />
            </label>
    
            <label className="input">
              Start Date:
              <input
                type="date"
                name="workDateStart"
                value={formData.workDateStart}
                onChange={handleChange}
              />
            </label>

            <label className="input">
              End Date:
              <input
                type="date"
                name="workDateEnd"
                value={formData.workDateEnd}
                onChange={handleChange}
              />
            </label>

            <label className="input">
                Responsibilities:
                <textarea
                name="responsibilities"
                value={formData.responsibilities}
                onChange={handleChange}
                cols={30}
                rows={7}
                >
                </textarea>
            </label>
        </div>
      );
}