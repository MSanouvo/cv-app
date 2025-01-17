import "../styles/insert.css";

export default function GeneralInfo({ formData, handleChange }) {
  return (
    <div className="section">
      <h2 className="header">General Info</h2>
      <label className="input">
        Name:
        <input
          className="input_field"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      {/* <span className="error">Error</span> */}

      <label className="input">
        Email:
        <input
          className="input_field"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <label className="input">
        Phone:
        <input
          className="input_field"
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
