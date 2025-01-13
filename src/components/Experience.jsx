import "../styles/insert.css"

export default function Experience({formData, handleChange}) {
    return (
        <div>
            <h2 className="header">Insert Info</h2>
            <lable htmlFor="name">
              Company:
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </lable>
    
            <lable>
              Position:
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
              />
            </lable>
    
            <lable>
              Start Date:
              <input
                type="date"
                name="workDateStart"
                value={formData.workDateStart}
                onChange={handleChange}
              />
            </lable>

            <lable>
              End Date:
              <input
                type="date"
                name="workDateEnd"
                value={formData.workDateEnd}
                onChange={handleChange}
              />
            </lable>

            <label>
                Responsibilities:
                <textarea
                name="responsibilities"
                value={formData.responsibilities}
                onChange={handleChange}
                >
                </textarea>
            </label>
        </div>
      );
}