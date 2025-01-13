import "../styles/insert.css";
import { useState } from "react";

export default function GeneralInfo({formData, handleChange}) {

  return (
    <div>
        <h2 className="header">Insert Info</h2>
        <lable htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </lable>

        <lable>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </lable>

        <lable>
          Phone:
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </lable>
    </div>
  );
}
