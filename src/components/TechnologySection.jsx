// src/components/TechnologySection.jsx
import React from "react";
import FormField from "./FormField";

const TechnologySection = ({ values, handleChange, errors }) => (
  <div className="section-container">
    <FormField
      label="Favorite Programming Language *"
      type="select"
      name="favoriteProgrammingLanguage"
      value={values.favoriteProgrammingLanguage}
      onChange={handleChange}
      error={errors.favoriteProgrammingLanguage}
    >
      <option value="">Select a language</option>
      <option value="JavaScript">JavaScript</option>
      <option value="Python">Python</option>
      <option value="Java">Java</option>
      <option value="C#">C#</option>
    </FormField>
    <FormField
      label="Years of Experience *"
      type="number"
      name="yearsOfExperience"
      value={values.yearsOfExperience}
      onChange={handleChange}
      error={errors.yearsOfExperience}
    />
  </div>
);

export default TechnologySection;
