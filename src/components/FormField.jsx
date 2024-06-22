import React from "react";
import "../styles/FormField.css";

const FormField = ({ label, type, name, value, onChange, error, children }) => (
  <div className="form-group">
    <label>{label}</label>
    {type === "textarea" ? (
      <textarea name={name} value={value} onChange={onChange}></textarea>
    ) : type === "select" ? (
      <select name={name} value={value} onChange={onChange}>
        {children}
      </select>
    ) : (
      <input type={type} name={name} value={value} onChange={onChange} />
    )}
    {error && <p className="error">{error}</p>}
  </div>
);

export default FormField;
