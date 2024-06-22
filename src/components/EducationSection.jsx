// src/components/EducationSection.jsx
import React from "react";
import FormField from "./FormField";

const EducationSection = ({ values, handleChange, errors }) => (
  <div className="section-container">
    <FormField
      label="Highest Qualification *"
      type="select"
      name="highestQualification"
      value={values.highestQualification}
      onChange={handleChange}
      error={errors.highestQualification}
    >
      <option value="">Select qualification</option>
      <option value="High School">High School</option>
      <option value="Bachelor's">Bachelor's</option>
      <option value="Master's">Master's</option>
      <option value="PhD">PhD</option>
    </FormField>
    <FormField
      label="Field of Study *"
      type="text"
      name="fieldOfStudy"
      value={values.fieldOfStudy}
      onChange={handleChange}
      error={errors.fieldOfStudy}
    />
  </div>
);

export default EducationSection;
