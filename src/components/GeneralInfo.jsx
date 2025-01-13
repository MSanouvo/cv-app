import "../styles/insert.css";
import { useState } from "react";

export default function GeneralInfo() {
  const [formData, setFormData] = useState({name:"", email:"", phone:""});

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData((prevFormData) => ({...prevFormData, [name]:value}));
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    // alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="header">Insert Info</h2>
      <lable htmlFor="name">Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </lable>
      
      <lable>Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </lable>

      <lable>Phone:
        <input type="number" name="phone" value={formData.phone} onChange={handleChange} />
      </lable>

        <button type="submit">Submit</button>
        <span>Name: {formData.name}, Email: {formData.email}, Message: {formData.message}</span>
    </form>
  );
}
