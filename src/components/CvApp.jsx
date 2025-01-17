import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Experience from "./Experience";
import Display from "./CvDisplay";
import { useState } from "react";
import "../styles/CvApp.css";

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

  const [errors, setErrors] = useState({});

  const validateForm = (data) => {
    const errors = {};

    if (!data.name.trim()) {
      errors.name = "Please input your name";
    }

    if (!data.email.trim()) {
      errors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Please enter a valid email";
    }

    if (data.phone.length != 10) {
      errors.phone = "Please enter a 10 digit phone number";
    }
    return errors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmittedData(formData);
    }
  };

  return (
    <div id="container">
      <form id="form" noValidate onSubmit={handleSubmit}>
        <GeneralInfo
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
        <Education
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
        <Experience
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
        <button type="submit">Submit</button>
      </form>

      <div id="display">
        <Display submittedData={submittedData} />
      </div>
    </div>
  );
}
