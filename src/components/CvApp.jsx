import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Experience from "./Experience";
import Display from "./Display1";
import { useState } from "react";
import "../styles/insert.css";

export default function CvApp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    degree: "",
    schoolDateStart: "",
    schoolDateEnd: "",
    comapny: "",
    position: "",
    workDateStart: "",
    workDateEnd: "",
    responsibilities: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(formData);
    console.log(submittedData);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <GeneralInfo formData={formData} handleChange={handleChange} />
        <Education formData={formData} handleChange={handleChange} />
        <Experience formData={formData} handleChange={handleChange} />
        <button type="submit">Submit</button>
      </form>

      <div className="display">
        <Display submittedData={submittedData} />
      </div>
    </div>
  );
}
