import "../styles/form.css";

export default function Education({ formData, handleChange, errors }) {
  return (
    <div id="section">
      <h2 className="header">Education</h2>
      <label className="input">
        School:
        <input
          className="input_field"
          type="text"
          name="school"
          value={formData.school}
          onChange={handleChange}
        />
      </label>

      <label className="input">
        Degree:
        <input
          className="input_field"
          type="text"
          name="degree"
          value={formData.degree}
          onChange={handleChange}
        />
      </label>

      <div className="dates">
        <label className="input">
          Start Date:
          <input
            type="date"
            name="schoolDateStart"
            value={formData.schoolDateStart}
            onChange={handleChange}
          />
        </label>

        <label className="input">
          End Date:
          <input
            type="date"
            name="schoolDateEnd"
            value={formData.schoolDateEnd}
            onChange={handleChange}
            min={formData.schoolDateStart}
          />
        </label>
      </div>
    </div>
  );
}
