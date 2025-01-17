import "../styles/insert.css";

export default function GeneralInfo({ formData, handleChange, errors }) {
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
          placeholder="John Doe"
        />
      </label>
      {errors.name && (
        <span className="error">{errors.name}</span>
      )}

      <label className="input">
        Email:
        <input
          className="input_field"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@email.com"
        />
      </label>
      {errors.email && (
        <span className="error">{errors.email}</span>
      )}

      <label className="input">
        Phone:
        <input
          className="input_field"
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="1234567890"
        />
      </label>
      {errors.phone && (
        <span className="error">{errors.phone}</span>
      )}
    </div>
  );
}
